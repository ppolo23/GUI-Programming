import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  valueFormControl = new FormControl('', [
    Validators.required
  ]);

  user: string;
  hide = true;

  logButton = 'Login';

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveInfo(): void {
    this.dialogRef.close(this.user);
  }

  changeButton(): void {
    if (this.logButton === 'Login') {
      this.logButton = 'Register';
    } else {
      this.logButton = 'Login';
    }
  }
}
