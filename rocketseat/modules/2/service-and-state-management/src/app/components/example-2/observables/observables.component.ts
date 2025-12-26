import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [AsyncPipe],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent implements OnInit, OnDestroy {
  myObservable$!: Observable<number>
  mySubscription!: Subscription
  listObservable$!: Observable<string[]>;

  ngOnInit() {
    this.createObservable()
    // this.subscribe1()
    this.createListObservable()
    // this.subscribeUppercaseList()
    this.subscribeOddNumbers()
  }

  ngOnDestroy() {
    this.mySubscription?.unsubscribe();
  }

  createObservable() {
    this.myObservable$ = new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
    });
  }

  subscribe1() {
    this.mySubscription = this.myObservable$.subscribe((value) => {
      console.log(value)
    });
  }

  createListObservable() {
    this.listObservable$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(['Ana', 'Lays', 'Gustavo', 'Pedro'])
      }, 1000)
    })
  }

  subscribeUppercaseList() {
    this.listObservable$
      .pipe(
        map(list => {
          return list.map(name => name.toUpperCase())
        })
      )
      .subscribe((list) => {
        console.log('Lista maiúscula', list)
      })
  }

  subscribeOddNumbers() {
    this.myObservable$
      .pipe(
        tap((number) => {
          console.log('Tap:', number)
        }),
        filter((number) => number % 2 != 0)
      )
      .subscribe((number) => {
        console.log('Numero impar:', number)
      })
  }
}
