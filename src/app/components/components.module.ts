import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioOptionComponent } from './radio-option/radio-option.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RadioOptionComponent, RadioGroupComponent],
  exports: [RadioOptionComponent, RadioGroupComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ComponentsModule {}
