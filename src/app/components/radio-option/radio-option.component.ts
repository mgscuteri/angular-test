import { Component, Input } from '@angular/core';

export interface RadioButtonOption {
  label: string;
  value: string;
}

@Component({
  selector: 'components-radio-option[option]',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.scss'],
})
export class RadioOptionComponent {
  @Input() option!: RadioButtonOption;
}
