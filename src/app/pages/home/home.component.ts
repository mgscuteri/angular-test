import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RadioGroupComponent } from 'src/app/components/radio-group/radio-group.component';

@Component({
  selector: 'pages-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('radioGroup') radioGroup: RadioGroupComponent;

  changes = 0;

  ngAfterViewInit() {
    this.radioGroup.selectedOptionFormControl.valueChanges.subscribe(() => {
      this.changes++;
    });
  }
}
