import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public hasError = false;
  public greeting ="";
  public  loginname;
  public password;
  public messageClasses ={
    "text-success":!this.hasError,
    "text-danger":  this.hasError,
    "text-special": this.hasError
  }
   constructor(private router:Router) { }
  ngOnInit() {
    this.loginname ='test';
    this.password='test';
  }
  Login(event)
  {
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
  }
}
