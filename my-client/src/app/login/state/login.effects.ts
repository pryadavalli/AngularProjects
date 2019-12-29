import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
 
import { mergeMap, map, catchError } from 'rxjs/operators';
 
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { LoginService } from 'src/app/loginservice.service';


import * as loginActions from './login.actions';

@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions, private loginService: LoginService) {

    }
     

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType(loginActions.LoginActionTypes.LoginAction),
        map((action:loginActions.LoginAction)=>action.payload),
        mergeMap((login: Login) => this.loginService.updateProduct(product).pipe(
            map(updateProduct => (new productActions.UpdateProductSuccess(updateProduct))),
            catchError(err => of(new productActions.UpdateProductFail(err)))
        )
        )
    )
}