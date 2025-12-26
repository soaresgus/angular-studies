import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {
  mySubject$: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.mySubject$.next('Esse valor nao ira chegar em ninguém')

    this.firstSubscribe()

    this.mySubject$.next('Novo valor emitido')
  }

  firstSubscribe() {
    this.mySubject$.subscribe((value) => {
      console.log('Primeira inscrição:', value)
    })
  }

}
