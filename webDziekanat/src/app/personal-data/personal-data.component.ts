import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  ctrl = new FormControl();
  buttonText = 'Edit';

  street = 'Some Steet';
  houseNumber = '10';
  flatNumber = '10';
  postalCode = '90-215';
  place = 'Place';
  province = 'Province';
  confirmed = 'No';

  editButton = false;

  constructor() { }

  ngOnInit() {
    this.ctrl.disable();
  }

  changeForm() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
      this.buttonText = 'Cancel';
      this.editButton = true;
    } else {
      this.ctrl.disable();
      this.buttonText = 'Edit';
      this.editButton = false;
    }
  }

}
