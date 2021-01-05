import { Component, OnInit } from "@angular/core";
import { EmailValidator } from "./email.validator";
import {
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  forbiddenUsernames = ["Chris", "Anna"];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          EmailValidator.forbiddenEmails
        ),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });

    // this.signupForm.valueChanges.subscribe((value) => console.log(value));
    // this.signupForm.statusChanges.subscribe((status) => console.log(status));
    this.signupForm
      .get("gender")
      .statusChanges.subscribe((status) => console.log(status));
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get("hobbies") as FormArray).push(control);
  }

  getControls() {
    return (this.signupForm.get("hobbies") as FormArray).controls;
  }

  get username() {
    return this.signupForm.get("userData.username");
  }

  get email() {
    return this.signupForm.get("userData.email");
  }

  forbiddenNames(control: FormControl): ValidationErrors | null {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }
}
