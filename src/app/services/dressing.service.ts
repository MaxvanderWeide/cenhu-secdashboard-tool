import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DressingService {
  message$ = new BehaviorSubject<string>('');

  message(message: string): void {
    this.message$.next(message);
  }
}
