import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  oringinaluserSettings: UserSettings = {
    name: null,
    emailoffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: UserSettings = { ... this.oringinaluserSettings };

  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes =   this.dataService.getSubscriptionTypes();
  }

  OnBlur(model: NgModel) {
    console.log(model.valid);
  }
  OnSubmit(form: NgForm) {

    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log(result),
      error => console.log(error)
    );
  }
}
