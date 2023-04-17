import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioOptionComponent } from './radio-option/radio-option.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';

@NgModule({
  declarations: [RadioOptionComponent, RadioGroupComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
