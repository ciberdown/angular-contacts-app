import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyTestServiceService {
  private type: string = 'Human';
  constructor() {}

  getType() {
    return this.type;
  }
}
