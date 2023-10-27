import { Component, Input } from '@angular/core';
import { ContactInterface } from 'src/app/servers/contacts-server.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss'],
})
export class RightComponent {
  @Input() contact!: ContactInterface;
}
