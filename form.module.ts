import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormErrorComponent } from './components/form-error/form-error.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SubmitComponent } from './components/submit/submit.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FilterComponent } from './components/filter/filter.component';

import { FormsService } from './services/forms.service';

@NgModule({
  declarations: [
    FormErrorComponent,
    TextareaComponent,
    SubmitComponent,
    CheckboxComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FormsService,
  ],
  exports: [
    FormErrorComponent,
    TextareaComponent,
    SubmitComponent,
  ]
})
export class FormModule { }
