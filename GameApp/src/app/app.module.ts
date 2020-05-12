import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatInputModule, MatButtonModule, MatToolbarModule, MatDialogModule, MatFormFieldModule,
  MatTabsModule, MatExpansionModule, MatGridListModule, MatSnackBarModule, MatMenuModule, 
  MatProgressSpinnerModule, MatDividerModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { StartGameComponent } from './start-game/start-game.component';
import { GameComponent } from './game/game.component';
import { FooterComponent } from './footer/footer.component';
import { ConfDialogComponent } from './conf-dialog/conf-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ToolbarComponent,
    LoginDialogComponent,
    StartGameComponent,
    GameComponent,
    FooterComponent,
    ConfDialogComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginDialogComponent
  ]
})
export class AppModule { }
