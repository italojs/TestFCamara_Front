import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html'
})
export class ErrorsComponent implements OnInit {
  errorList: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
