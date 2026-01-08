import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  getUser() {
    return of([
      { name: 'Diego', status: 1},
      { name: 'Robson', status: 0},
    ])
  }
}
