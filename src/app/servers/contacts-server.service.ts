import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsServerService {
  contacts: ContactInterface[] = [
    { name: 'Jane', age: 22, status: 'online', id: 234 },

    { name: 'Sam', age: 43, status: 'offline', id: 215 },

    { name: 'Roob', age: 37, status: 'active', id: 152 },

    { name: 'John', age: 53, status: 'online', id: 1562 },
  ];
  constructor() {}

  removeContact(id: number) {
    this.contacts = this.contacts.filter((contact) => {
      return contact.id !== id;
    });
    console.log(this.contacts);
  }
  getContact(id: number): undefined | ContactInterface {
    return this.contacts.filter((contact) => {
      return contact.id === id;
    })[0];
  }
}
type StatusType = 'online' | 'active' | 'offline';
export interface ContactInterface {
  name: string;
  age: number;
  status: StatusType;
  id: number;
}
