import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public hasError = false;
  public isSpecial = true;
  public greeting ="";
  public  loginname;
  public password;
  public messageClasses ={
    "text-success":!this.hasError,
    "text-danger":  this.hasError,
    "text-special": this.hasError
  }
 
  constructor() { }

  ngOnInit() {
    
  }

  Login(event)
  {
    if(this.loginname == "test" && this.password=="test")
    {
      this.greeting = "Welcome to angular world!";
      this.hasError = false;
    }
    else
    {
      this.hasError = true;
    }

  }
}
