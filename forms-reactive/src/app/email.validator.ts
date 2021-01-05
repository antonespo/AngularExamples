import { FormControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class EmailValidator {
  static forbiddenEmails(
    control: FormControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise<ValidationErrors | null>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
