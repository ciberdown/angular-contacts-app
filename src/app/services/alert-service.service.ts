import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertServiceService {
  allowAlert: boolean = false;
  constructor() {}
  alert() {
    this.showAlert();
    setTimeout(() => {
      this.hideAlert();
    }, 2000);
  }

  showAlert() {
    this.allowAlert = true;
  }
  hideAlert() {
    this.allowAlert = false;
  }
}
