import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  imports: [],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css'
})
export class BehaviorSubjectComponent implements OnInit {
  myBehaviorSubject$ = new BehaviorSubject<string>('Primeiro valor');

  ngOnInit(): void {
    this.firstSubscribe()
  }

  firstSubscribe() {
    this.myBehaviorSubject$.subscribe((value) => {
      console.log('Primeira inscrição:', value)
    })
  }

  emitValue() {
    this.myBehaviorSubject$.next('Valor enviado')
  }

  secondSubscribe() {
    this.myBehaviorSubject$.subscribe(value => {
      console.log('Segunda inscrição:', value)
    })
  }
}
