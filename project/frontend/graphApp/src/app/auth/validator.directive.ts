import { Directive, Input } from '@angular/core';
import { AbstractControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidatorDirective,
      multi: true,
    }
  ]
})
export class ValidatorDirective implements Validator{
  @Input() form: NgForm | undefined;
  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(this.form)
    return {
      error: 'no error'
    }
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
