import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-conf-dialog',
  templateUrl: './conf-dialog.component.html',
  styleUrls: ['./conf-dialog.component.css']
})
export class ConfDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

