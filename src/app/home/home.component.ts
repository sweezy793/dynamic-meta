import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/assets/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users = USERS;

  constructor() {}

  ngOnInit(): void {}
}
