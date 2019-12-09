import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router) { }

  private products = [];
  private id  = 1;
  ngOnInit() {
    this.products.push({'id':1, 'name':'iphonex3'});
    this.products.push({'id':2, 'name':'iphonex4'});
    this.products.push({'id':3, 'name':'iphonex5'});
    this.products.push({'id':4, 'name':'iphonex6'});  
    this.products.push({'id':5, 'name':'iphonex7'});
  }
  getDetails(product)
  {
    this.router.navigate(['/products', product.id]);
  }
}
