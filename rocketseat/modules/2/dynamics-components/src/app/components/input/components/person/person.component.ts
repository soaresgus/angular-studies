import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IPerson } from '../../input.component';

@Component({
  selector: 'app-person',
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnChanges {
  @Input() person!: IPerson;

  @Output() removePersonEmit = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges changes:', changes)

    if (changes['person'].currentValue) {
      console.log('currentValue', changes['person'].currentValue)
    }
  }

  removePerson(personId: number) {
    this.removePersonEmit.emit(personId);
  }
}
