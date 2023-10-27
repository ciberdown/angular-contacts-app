import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ContactInterface,
  ContactsServerService,
} from 'src/app/servers/contacts-server.service';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.scss'],
})
export class SingleContactComponent {
  @Input() contact!: ContactInterface;
  @Input() removeble: boolean = true;

  constructor(
    private contactsService: ContactsServerService,
    private router: Router,
  ) {}

  removeHandle(event: any) {
    event.stopPropagation();
    this.contactsService.removeContact(this.contact.id);
  }

  clickContactHandle() {
    this.router.navigate(['contacts', this.contact.id]);
  }
}
