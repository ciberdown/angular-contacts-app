import { Component } from '@angular/core';
import {
  ContactInterface,
  ContactsService,
} from '../services/contacts-services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(public contactsService: ContactsService) {
    this.contactsService.statusChanged.subscribe((data) => {
      console.log(data);
    });
  }
}
