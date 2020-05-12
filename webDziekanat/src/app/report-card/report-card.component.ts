import { Component } from '@angular/core';

export interface Semester {
  value: string;
  viewValue: string;
}

export interface Course {
  ko: string;
  name: string;
  position: number;
  teacher: string;
  ects: number;
  assesment: string;
  paid: string;
}

const ELEMENT_DATA: Course[] = [
  { position: 1, ko: '00 860001 00', name: 'BHP', teacher: 'dr inż. Katarzyna Boczkowska', ects: 0, assesment: '-', paid: 'no' },
  { position: 2, ko: '02 566161 00', name: 'Computer Network Administration', teacher: 'dr inż. Artur Sierszeń',
   ects: 5, assesment: '-', paid: 'no' },
  { position: 3, ko: '00 860001 00', name: 'Network Programming', teacher: 'dr inż. Radosław Wajman', ects: 5, assesment: '-', paid: 'no' },
  { position: 4, ko: '00 860001 00', name: 'Librarian training', teacher: 'mgr inż. Izabela Gajda', ects: 0, assesment: '-', paid: 'no' },
  { position: 5, ko: '00 860001 00', name: 'Abroad', teacher: '', ects: 30, assesment: '-', paid: 'no' }
];

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent {

  displayedColumns: string[] = ['position', 'ko', 'name', 'teacher', 'ECTs', 'Assesment', 'Płatny'];
  dataSource = ELEMENT_DATA;

  semesters: Semester[] = [
    { value: 'sem1617-1', viewValue: '2016/2017 Z - 1' },
    { value: 'sem1617-2', viewValue: '2006/2017 Z - 2' },
    { value: 'sem1718-1', viewValue: '2017/2018 Z - 1' },
    { value: 'sem1718-2', viewValue: '2018/2019 Z - 2' },
    { value: 'sem1819-1', viewValue: '2018/2019 Z - 1' }
  ];
}
