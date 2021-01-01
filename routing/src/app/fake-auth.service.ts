import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FakeAuthService {
  private loggedIn = false;

  constructor() {}

  isAuthenticate() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    });
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
