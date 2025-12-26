import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable().pipe(
    map((itemsList) => structuredClone(itemsList))
  );

  getValue() {
    return structuredClone(this.itemsSubject.value)
  }

  addItem(item: { name: string, price: number }) {
    const newArray = [...this.itemsSubject.value, item]
    this.itemsSubject.next(newArray);
  }
}
