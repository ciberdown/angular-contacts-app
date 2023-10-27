import { Component, Input } from '@angular/core';
import {
  ContactInterface,
  ContactsServerService,
} from 'src/app/servers/contacts-server.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
})
export class LeftComponent {

  constructor(public contactsSerivce: ContactsServerService) {

  }
}
