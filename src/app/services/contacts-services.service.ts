import { EventEmitter, Injectable } from '@angular/core';
import { MyTestServiceService } from './my-test-service.service';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: ContactInterface[] = [
    {
      name: 'Amin',
      age: 22,
      type: 'human',
      status: 'active',
    },
  ];
  statusChanged = new EventEmitter<string>();

  constructor(private testService: MyTestServiceService) {}
  addItem(item: ContactInterface) {
    item.type = this.testService.getType();
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
  type?: string;
  status: 'active' | 'notActive' | 'online';
}
