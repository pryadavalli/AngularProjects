import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url:string = "/assets/data/employees.json";
  constructor(private HttpClient:HttpClient) { }
 
}
