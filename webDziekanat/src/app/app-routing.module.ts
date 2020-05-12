import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StatutesComponent } from './statutes/statutes.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { CourseScheduleComponent } from './course-schedule/course-schedule.component';
import { StudentAreaComponent } from './student-area/student-area.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'statutes', component: StatutesComponent },
  { path: 'bulletin', component: BulletinComponent },
  { path: 'courseSchedule', component: CourseScheduleComponent },
  { path: 'studentArea/:id', component: StudentAreaComponent },
  { path: 'documents', component: DocumentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
