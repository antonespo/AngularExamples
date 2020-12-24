import { Component, Input, OnInit } from '@angular/core';
import { IUser } from './../home.component';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css'],
})
export class ActiveComponent implements OnInit {
  @Input() actives: IUser[];

  constructor() {}

  ngOnInit(): void {}
}
