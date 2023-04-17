import { Component, Input } from '@angular/core';
import { RadioButtonOption } from '../radio-option/radio-option.component';

@Component({
  selector: 'components-radio-group[options]',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent {
  @Input() options!: RadioButtonOption[];
}
