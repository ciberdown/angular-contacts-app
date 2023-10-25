import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import {
  ContactInterface,
  ContactsService,
} from 'src/app/services/contacts-services.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  name: string = '';
  age: number | null = null;

  constructor(
    private contactsSerive: ContactsService,
    public alertSubmitService: AlertServiceService,
    private router: Router,
  ) {}

  addContact(contact: ContactInterface) {
    this.contactsSerive.addItem(contact);
  }

  navigateToHomePage() {
    this.router.navigate(['/']);
  }

  submitHandler() {
    if (this.age === null || this.name === '') {
      this.alertSubmitService.alert();
    } else {
      this.addContact({
        name: this.name,
        age: this.age as number,
        status: 'online',
      });
      this.name = '';
      this.age = null;
    }
  }
}
