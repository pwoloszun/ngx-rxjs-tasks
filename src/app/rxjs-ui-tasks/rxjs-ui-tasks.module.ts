import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationService } from './services/registration.service';
import { ApiCallService } from './services/api-call.service';
import { ComplexTaskComponent } from './complex-task/complex-task.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RegistrationFormComponent,
    ComplexTaskComponent,
  ],
  providers: [
    RegistrationService,
    ApiCallService,
  ],
})
export class RxjsUiTasksModule {
}
