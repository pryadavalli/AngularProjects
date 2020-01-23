import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './auth.service';
import { Store, select } from '@ngrx/store';

import * as fromUser from '../user/state/user.reducer';
import * as userActions from '../user/state/user.actions';

import {User} from '../user/user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In';
  errorMessage: string;
  maskUserName: boolean;
  isValidLogin:boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private store: Store<fromUser.UserState>) {
  }
  ngOnInit(): void {
    this.store.pipe(select(fromUser.getUserState)).subscribe(
      markUser => this.maskUserName = markUser
    )

    this.store.pipe(select(fromUser.getUserLoginState)).subscribe
      ((data: boolean) => 
        {
            this.isValidLogin = data;
            if(this.isValidLogin)
            {
              console.log("Login success");
              this.router.navigate(['/products']);
            }
        }
      );
    //.subscribe(
     // isvalidlogin => this.isValidLogin = isvalidlogin
    //)
  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(
      new userActions.ToggleMarkUserName(value)
    )
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      this.store.dispatch(new userActions.LoginUser(loginForm.form.value));
      
   /*    var temp =  this.store.pipe(select(fromUser.getUserLoginState));
       temp.subscribe((data: boolean) => 
        {
            this.isValidLogin = data;
        });

       if(this.isValidLogin)
        {
          console.log("Login success");
          this.router.navigate(['/products']);
        }
        */
     /* this.authService.login(loginForm.form.value);
      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
    */
  }
}
}
