import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public productId;
 
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
