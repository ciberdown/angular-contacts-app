import { Component } from '@angular/core';
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
  ) {}
  addContact(contact: ContactInterface = { name: 'John', age: 42 }) {
    this.contactsSerive.addItem(contact);
    console.log(this.contactsSerive.getItems());
  }
  submitHandler() {
    if (this.age === null || this.name === '') {
      this.alertSubmitService.alert();
    } else {
      this.addContact({ name: this.name, age: this.age as number });
      this.name = '';
      this.age = null;
    }
  }
  nameInputHandler(e: any) {
    this.name = e.target.value;
  }
  ageInputHandler(e: any) {
    this.age = e.target.value as number;
  }
}
