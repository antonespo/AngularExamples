import { OnDestroy } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      (value: boolean) => {
        this.userActivated = value;
      }
    );
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
