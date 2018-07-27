import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerDirective } from './directives/datepicker.directive';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorModalComponent,
    SuccessModalComponent,
    DatepickerDirective
  ],
  exports: [
    ErrorModalComponent,
    SuccessModalComponent,
    DatepickerDirective
  ]
})
export class SharedModule { }
