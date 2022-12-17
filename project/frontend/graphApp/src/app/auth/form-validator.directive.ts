import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appFormValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: FormValidatorDirective, multi: true}]
})
export class FormValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return {'error': 'error'}
  }
}