import { Component, ViewChild } from "@angular/core";
import { NgForm, NgModel, NgModelGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") form: NgForm;
  @ViewChild("email") email: NgModel;
  @ViewChild("userData") userData: NgModelGroup;
  answer = "Answer here...";
  username = "MyUsername";
  genders = ["male", "female"];

  suggestUserName() {
    const suggestedName = "Superuser";
  }

  onSubmit() {
    console.log(this.form);
    console.log(this.userData);
    console.log(this.email);
  }
}
