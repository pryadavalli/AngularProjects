import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public hasError = false;
  public isSpecial = true;
  public messageClasses ={
    "text-success":!this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit() {
    
  }

}
