import { Action } from '@ngrx/store';
import { LoginState } from './login.reducer';

export enum LoginActionTypes{
    LoginAction = "[Login] Login to Web Site"
}

export class LoginAction  implements Action{
    readonly   type = LoginActionTypes.LoginAction;
    constructor(public payload:LoginState){}
}
    
export type LoginActions = LoginAction;