import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'client';
  public users: any;
  public isAlive = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  onChangeProp() {
    this.isAlive = false;
  }

  public getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(
      (res) => {
        this.users = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
