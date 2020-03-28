import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidateService {
  public pattern_number = '^[0-9]*$';
  public pattern_month = '^1[^3456789]$|^0[1-9]{1}$|^[1-9]{1}$';
  public pattern_year = '^[^0][0-9]{3}$';
  public pattern_email = '^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$';
  constructor() { }

  public getValidate(form, formErrors, ValidateMessage) {
    if (!form) {
      return formErrors;
    }
    // tslint:disable-next-line:forin
    for (const field in formErrors) {
      formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid && !formErrors[field]) {
        const messages = ValidateMessage[field];
        for (const key in control.errors) {
          if (!formErrors[field] && messages[key]) {
            formErrors[field] += messages[key] + '';
          }
        }
      }
    }
    return formErrors;
  }

  public matchOtherValidator(otherControlName: string) {

    let thisControl: FormControl;
    let otherControl: FormControl;

    return function matchOtherValidate(control: FormControl) {

      if (!control.parent) {
        return null;
      }
      if (!control.value) {
        return null;
      }

      if (!thisControl) {
        thisControl = control;
        otherControl = control.parent.get(otherControlName) as FormControl;
        if (!otherControl) {
          throw new Error('matchOtherValidator(): other control is not found in parent group');
        }
        otherControl.valueChanges.subscribe(() => {
          thisControl.updateValueAndValidity();
        });
      }

      if (!otherControl) {
        return null;
      }

      if (otherControl.value !== thisControl.value) {
        return {
          matchOther: true
        };
      }
      return null;
    };
  }

  public noWhitespaceValidator(control: FormControl) {
    let isWhitespace = null;
    if (control.value) {
      if (String(control.value).trim().length === 0) {
        isWhitespace = true;
      } else {
        isWhitespace = null;
      }
    } else {
      isWhitespace = null;
    }

    // tslint:disable-next-line:object-literal-key-quotes
    return isWhitespace ? { 'whitespace': true } : null;
  }

}
