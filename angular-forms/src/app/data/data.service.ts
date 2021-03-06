import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {

    return of(['Monthly', 'Annually', 'Lifetime']);
  }
  postUserSettingsForm(userSettings: UserSettings): Observable<any> {

    return this.httpClient.post('https://putsreq.com/DfFRyOrtoBWvrZ6Tarbb', userSettings);

  }
}
