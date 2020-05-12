import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {

  text = 'Polski';
  logText = 'Log In';

  loged = false;
  user = 'User';
  id = '0909392';

  constructor(public snackBar: MatSnackBar) { }

  private changeText(): void {
    if (this.text === 'Polski') {
      this.text = 'English';
    } else {
      this.text = 'Polski';
    }
  }

  private logIn(): void {
    if (this.loged) {
      this.loged = false;
      this.logText = 'Log In';
      this.snackBar.open('Logged Out', 'Log out', {
        duration: 2000,
      });
    } else {
      this.loged = true;
      this.logText = 'Log Out';
      this.snackBar.open('Logged In', 'Log in', {
        duration: 2000,
      });
    }
  }

}
