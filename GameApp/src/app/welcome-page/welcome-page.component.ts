import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  progress = 0;

  constructor(
    public snackBar: MatSnackBar,
    public router: Router) { }

  ngOnInit() {
  }

  enterGame(): void {
    this.router.navigate(['ChessGame/StartGame']);
  }

  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    config.panelClass = ['snackbar'];
    this.snackBar.open(message, action, config);
  }

}
