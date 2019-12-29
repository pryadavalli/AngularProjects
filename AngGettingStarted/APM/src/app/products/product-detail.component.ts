import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Router}  from '@angular/router'
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle :string = "Page Details";
  product : IProduct;
  allproducts:IProduct[] = [];
  errorMessage:string;

  constructor(private route:ActivatedRoute, private router:Router,
    private productSerice: ProductService) { 
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id');

    this.pageTitle += `: ${id}`;
   
    this.productSerice.getProducts().subscribe(
      e => {
          this.product = e.find(x=>x.productId == id);
      }
     )
  }
  onBack():void{
    this.router.navigate(['/products']);

  }

}
