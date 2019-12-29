import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
   templateUrl:'./product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
  pageTitle:string = "Product List";
  imageWidth:number =50;
  imageMargin:number = 2;
  showImage: boolean = true;
  _listFilter:string ='cart';
  
  filteredProducts: IProduct[];
  products:IProduct[] = [];

  errorMessage : string;

  constructor(private productSerice: ProductService)
  {
    this.listFilter = '';
  }
 
  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(value:string){
      this._listFilter = value;
      this.filteredProducts = this.listFilter?this.performFilter(this.listFilter): this.products;
  }


  toggleImage() :void
  {
      this.showImage = !this.showImage;
  }

  ngOnInit()
  {
    console.log("In OnInit");
    this.productSerice.getProducts().subscribe({
      next: products=>{this.products = products,
        this.filteredProducts = this.products
      },
      error:err=>this.errorMessage = err
    });
    
  }

 
  performFilter(filterBy:string):IProduct[]{
     filterBy = filterBy.toLocaleLowerCase();
     return this.products.filter((product:IProduct)=>
     product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
  }

  OnRatingClicked(message:string):void{
    this.pageTitle = "Product List " + message;
  }
}