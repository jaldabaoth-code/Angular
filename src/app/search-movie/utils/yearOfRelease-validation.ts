import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function yearOfReleaseValidation(
  minYear: number, // 1990
  maxYear: Date // new Date()
): ValidatorFn {
  return (abstractControl: AbstractControl): ValidationErrors | null => {
    const yearControl = abstractControl;
    const maxYearRequired = maxYear.getFullYear();
    if (minYear > yearControl?.value || maxYearRequired < yearControl?.value) {
      return {
        min: {
          minYearRequired: minYear.toString(),
          maxYearRequired: maxYearRequired.toString(),
        },
      };
    } else {
      return { required: false };
    }
  };
}
