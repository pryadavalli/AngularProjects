import { Action } from '@ngrx/store';
import { User } from '../user';

export enum UserActionTypes{
ToggleMarkUserName = "[User] ToggleMarkUserName",
LoginUser ="[User] Login User",
LoginSuccess = "[User] Login Success",
LoginFail = "[User] Login Fail",
 
}
export class ToggleMarkUserName  implements Action{
    readonly   type = UserActionTypes.ToggleMarkUserName;
    constructor(public payload:boolean){}
}
export class LoginUser  implements Action{
    readonly   type = UserActionTypes.LoginUser;
    constructor(public payload:User){}
}
 
export class LoginSuccess  implements Action{
    readonly   type = UserActionTypes.LoginSuccess;
    constructor(public payload:boolean){}
}
export class LoginFail  implements Action{
    readonly   type = UserActionTypes.LoginFail;
    constructor(public payload:boolean){}
}

export type UserActions = ToggleMarkUserName|LoginUser|LoginSuccess|LoginFail;
 