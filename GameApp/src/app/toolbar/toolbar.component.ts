import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

import { LogDataService } from '../log-data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user: string;
  logged: boolean;

  constructor(public dialog: MatDialog, private service: LogDataService
    , public router: Router) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(message => this.logged = message);
  }

  homeLink(): void {
    this.router.navigate(['ChessGame']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '380px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user = result;
        this.logged = true;
        this.service.changeMessagge(true);
      }
    });
  }
}
