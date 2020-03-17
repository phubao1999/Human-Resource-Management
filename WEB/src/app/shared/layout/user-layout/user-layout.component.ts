import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickMenu() {
    console.log('aaa');
    // const menu = document.querySelector('.nav-bottom');
    // const outLet = document.querySelector('.out-let');
    // menu.classList.toggle('hide');
    // outLet.classList.toggle('move');
  }

}
