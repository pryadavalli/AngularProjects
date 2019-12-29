import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import {map,tap,filter,catchError} from 'rxjs/operators'

@Injectable({
    providedIn:'root'
})
export class ProductService{

    private productUrl = 'api/products/products.json';
    constructor(private http:HttpClient)
    {

    }
    getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data=>console.log("data " + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err:HttpErrorResponse)
    {
        let errorMessage  = '';
        if(err.error instanceof ErrorEvent)
        {
            errorMessage = `an error occured' : ${err.error.message}`;
        }
        else
        {
            errorMessage = ' server returned code';
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}