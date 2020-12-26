import { Component, OnInit } from "@angular/core";
import { FakeAuthService } from "./../fake-auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loggedIn: boolean;
  loading = true;

  constructor(private fakeAuthService: FakeAuthService) {}

  ngOnInit(): void {
    this.fakeAuthService.isAuthenticate().then((logged: boolean) => {
      this.loggedIn = logged;
      this.loading = false;
    });
  }

  onLogin() {
    this.fakeAuthService.login();
    this.loggedIn = true;
  }

  onLogout() {
    this.fakeAuthService.logout();
    this.loggedIn = false;
  }
}
