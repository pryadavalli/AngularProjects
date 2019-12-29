import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StoreModule } from '@ngrx/store';
import { loginreducer } from './login/state/login.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    StoreModule.forRoot(loginreducer),
    StoreModule.forFeature('logins',loginreducer),
    StoreDevtoolsModule.instrument({
      name:'PR Devtools',
      maxAge:25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
