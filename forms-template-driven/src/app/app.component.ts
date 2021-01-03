import { Component, ViewChild } from "@angular/core";
import { NgForm, NgModel, NgModelGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm;
  @ViewChild("email") email: NgModel;
  @ViewChild("userData") userData: NgModelGroup;
  answer = "Answer here...";
  username = "MyUsername";
  genders = ["male", "female"];
  submitted = false;

  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };

  suggestUserName() {
    const suggestedName = "Superuser";
    this.signupForm.setValue({
      userData: {
        username: "pippo",
        email: "prova@test.com",
      },
      secret: "pet",
      questionAnswer: "Text bla bla bla",
      gender: "male",
    });

    // this.signupForm.form.patchValue({
    //   userData: {
    //     username: suggestedName,
    //   },
    // });
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.signupForm);
    console.log(this.userData);
    console.log(this.email);

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
