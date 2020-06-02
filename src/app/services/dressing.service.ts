import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DressingService {
  message$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  message(message: string): void {
    this.message$.next(message);
  }
}
