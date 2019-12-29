import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../login/state/login.reducer';
import * as loginActions from '../login/state/login.actions';

export interface LoginStateLocal{
  username: string;
  password: string;
}
const intitalState : LoginStateLocal = {
  username: '',
  password: ''
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public hasError = false;
  public greeting ="";
  public  loginState = intitalState;
  public messageClasses ={
    "text-success":!this.hasError,
    "text-danger":  this.hasError,
    "text-special": this.hasError
  }
   constructor(private store: Store<fromRoot.State>,private router:Router) { }
  ngOnInit() {
    this.loginState.username = 'test';
    this.loginState.password = 'test';


  }
  login(formValues)
  {
 
  console.log(formValues);
  
    this.store.dispatch(
      new loginActions.LoginAction(this.loginState)
    );

    /*
    if(this.loginname == "test" && this.password == "test")
    {
      this.greeting = "Welcome to angular world!";
      this.hasError = false;
      this.router.navigate(['/home']);
    }
    else
    {
      this.hasError = true;
      console.log(this.messageClasses);
    }
    */


  }
}
