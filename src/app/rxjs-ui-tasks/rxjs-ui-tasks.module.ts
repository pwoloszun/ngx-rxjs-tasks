import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationService } from './services/registration.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RegistrationFormComponent,
  ],
  providers: [
    RegistrationService,
  ],
})
export class RxjsUiTasksModule {
}
