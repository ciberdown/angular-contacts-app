import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  routingIndex: number = 0;

  handleroutingIndex(num: number) {
    this.routingIndex = num;
  }
}
