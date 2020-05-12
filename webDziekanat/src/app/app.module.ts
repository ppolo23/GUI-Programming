import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatInputModule, MatToolbarModule,
  MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StatutesComponent } from './statutes/statutes.component';
import { AppRoutingModule } from './app-routing.module';
import { BulletinComponent } from './bulletin/bulletin.component';
import { CourseScheduleComponent } from './course-schedule/course-schedule.component';
import { StudentAreaComponent } from './student-area/student-area.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { ReportCardComponent } from './report-card/report-card.component';
import { DocumentsComponent } from './documents/documents.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FooterComponent,
    HomeComponent,
    StatutesComponent,
    BulletinComponent,
    CourseScheduleComponent,
    StudentAreaComponent,
    PersonalDataComponent,
    StudentInfoComponent,
    ReportCardComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AppRoutingModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
