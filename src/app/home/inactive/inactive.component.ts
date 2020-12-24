import { Component, Input, OnInit } from '@angular/core';
import { IUser } from './../home.component';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css'],
})
export class InactiveComponent implements OnInit {
  @Input() inactives: IUser[];

  constructor() {}

  ngOnInit(): void {}
}
