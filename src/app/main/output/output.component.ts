import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ContactInterface,
  ContactsService,
} from 'src/app/services/contacts-services.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Input() contact!: ContactInterface;
  @Input() index!: number;
  pathIndex: number | null = null;
  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.handleGetContactWhenRoutingInSingleContact();
  }

  handleGetContactWhenRoutingInSingleContact() {
    this.route.params.subscribe((params) => {
      this.pathIndex = params['index'];

      if (this.hasPathIndex()) {
        this.contact =
          this.contactsService.getItems()[this.pathIndex as number];
        this.index = this.pathIndex as number;
      }
    });
  }
  hasPathIndex(): boolean {
    if (this.pathIndex) {
      return true;
    }
    return false;
  }

  removeContact() {
    this.contactsService.removeItem(this.index);
  }

  sendStatusChanged(data: string) {
    this.contactsService.statusChanged.emit(data);
  }
  backHandle() {
    this.router.navigate(['/contacts']);
  }
  statusClicked(event: any) {
    const currentStatus = event.target.value;
    this.sendStatusChanged(currentStatus);
    event.stopPropagation();
  }

  clickContactHandle() {
    if (!this.hasPathIndex()) {
      this.router.navigate(['/contacts', this.index]);
      console.log(this.index + ' clicked');
    }
  }
}
