import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
 

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
