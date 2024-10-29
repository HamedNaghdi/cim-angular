import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerSubject = new BehaviorSubject<string>('Default Header')
  header$ = this.headerSubject.asObservable()
  // constructor() { }
  setHeader(header: string) {
    this.headerSubject.next(header)
  }
}
