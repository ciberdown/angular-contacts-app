import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ContactInterface,
  ContactsServerService,
} from '../servers/contacts-server.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  selectedContact!: ContactInterface | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsServerService,
  ) {
    this.selectedPathById();
  }

  selectedPathById(): ContactInterface | undefined {
    let selectedContact;
    this.activatedRoute.params.subscribe((params) => {
      const id = +params['id'];
      console.log(id);
      id && (this.selectedContact = this.contactsService.getContact(id));
    });
    return selectedContact;
  }
}
