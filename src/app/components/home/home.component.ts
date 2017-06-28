import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DataService],
  
})
export class HomeComponent implements OnInit 
{
  private products: any;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getProductList().subscribe( result => this.products = result );
  }

}
