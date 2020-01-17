import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as userActions from './user.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { User } from '../user';

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private authService: AuthService)
     {

    }
    @Effect()
    loginUser$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.LoginUser),
        map((action:userActions.LoginUser)=>action.payload),
        mergeMap((user: User) => this.authService.login(user).pipe(
            map(res => (new userActions.LoginSuccess(true))),
            catchError(err => of(new userActions.LoginFail(false)))
        )
    )
    )
}