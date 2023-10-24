import { Component, Input, OnInit } from '@angular/core';
import {
  ContactInterface,
  ContactsService,
} from 'src/app/services/contacts-services.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  @Input() contact: ContactInterface = { name: '', age: 0 };
  @Input() index: number = 0;
  constructor(private contactsService: ContactsService) {}
  removeContact() {
    this.contactsService.removeItem(this.index);
  }
}
