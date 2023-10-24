import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: ContactInterface[] = [
    {
      name: 'Amin',
      age: 22,
    },
  ];

  constructor() {}
  addItem(item: ContactInterface) {
    this.contacts.push(item);
  }
  removeItem(idx: number) {
    this.contacts = this.contacts.filter((item, index) => index !== idx);
  }

  getItems(): ContactInterface[] {
    return this.contacts;
  }
}
export interface ContactInterface {
  name: string;
  age: number;
}
