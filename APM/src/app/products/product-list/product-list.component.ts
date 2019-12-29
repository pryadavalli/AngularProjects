import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../state/product.reducer';
import * as productActions from '../state/product.actions';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  componentActive = true;

  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  errorMessage$: Observable<string>;


  constructor(private store: Store<fromProduct.State>, 
    private productService: ProductService) { }

  ngOnInit(): void {

    this.store.dispatch(new productActions.Load());
    
    this.store.pipe(select(fromProduct.getProducts),
    takeWhile(()=> this.componentActive)
    ).subscribe(
      (products:Product[]) => this.products = products
    );

    this.store.pipe(select(fromProduct.getCurrentProduct)).subscribe(
      currentProduct => this.selectedProduct = currentProduct
    );

    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));

    // this.productService.getProducts().subscribe({
    //   next: (products: Product[]) => this.products = products,
    //   error: (err: any) => this.errorMessage = err.error
    // });

    //** below one is without selector implementation */
    // this.store.pipe(select('products')).subscribe(
    //   products=> {
    //     if(products)
    //       this.displayCode = products.showProductCode
    //   }
    // )

    // * Below code is with selector implementation in the reducer
    this.store.pipe(select(fromProduct.getShowProductCode)).subscribe(
      showProductCode => this.displayCode = showProductCode
    )
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  checkChanged(value: boolean): void {


    // this.store.dispatch({
    //   type:'TOGGLE_PRODUCT_CODE',
    //   payload: value
    // });

    this.store.dispatch(
      new productActions.ToggleProductCode(value)
    )
  }

  newProduct(): void {
    //this.productService.changeSelectedProduct(this.productService.newProduct());

    this.store.dispatch(new productActions.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    //this.productService.changeSelectedProduct(product);

    this.store.dispatch(
      new productActions.SetCurrentProduct(product)
    );

  }

}
