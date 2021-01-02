import { Component, OnDestroy, OnInit } from "@angular/core";
import { ChildActivationStart } from "@angular/router";
import { interval, Observable, Subscription } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}
  private counter: Subscription;

  ngOnInit() {
    // this.counter = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    // NEXT
    // const customCounter = new Observable((observer) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // });

    // ERROR
    // const customCounter = new Observable((observer) => {
    //   let count = 0;
    //   setInterval(() => {
    //     if (count > 7) {
    //       observer.error(new Error("Counter exceded the range"));
    //     }
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // });

    // COMPLETE
    const customCounter = new Observable<number>((observer) => {
      let count = 0;
      setInterval(() => {
        if (count > 7) {
          observer.complete();
        }
        observer.next(count);
        count++;
      }, 1000);
    });

    // SUBSCRIPTION
    // this.counter = customCounter.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error.message);
    //   },
    //   () => {
    //     console.log("3 is reached. Count completed!");
    //   }
    // );

    // OPERATORS
    // NB IN PIPE posso mettere infiniti operator di rxjs, non solo 1
    // https://www.learnrxjs.io/learn-rxjs/operators
    const customCounterPipe = customCounter.pipe(
      filter((data: number, i: number) => {
        if (data % 2 == 0) {
          return true;
        }
      }),
      map((data: number) => {
        return `Round: ${data}`;
      })
    );

    // SUBSCRIPTION
    this.counter = customCounterPipe.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        console.log("7 is reached. Count completed!");
      }
    );
  }

  ngOnDestroy() {
    this.counter.unsubscribe();
  }
}
