import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogDataService {

  private messageSource = new BehaviorSubject<boolean>(false);

  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessagge(message: boolean): void {
    this.messageSource.next(message);
  }
}

