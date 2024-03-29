import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss'],
})
export class FlexboxComponent {
  @Input() justifyContent: string = 'space-between';
  @Input() alignItems: string = 'center';
  @Input() gap: string = '0px';
  @Input() flexDirection: string = 'row';
}
