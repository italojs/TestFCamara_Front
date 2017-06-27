import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {
  private _user: any;
  constructor() { }

  ngOnInit() { 
    this._user = JSON.parse(localStorage.getItem("macaw.user"));
  }
}
