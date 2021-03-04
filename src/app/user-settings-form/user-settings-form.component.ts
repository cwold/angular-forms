import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { IUserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : IUserSettings = {
    name: "",
    emailOffers: false,
    interfaceStyle: "",
    subscriptionType: "",
    notes: ""
  }

  userSettings : IUserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }

}
