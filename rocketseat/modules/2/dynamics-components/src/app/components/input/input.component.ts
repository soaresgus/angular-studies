import { Component } from '@angular/core';
import { PersonComponent } from './components/person/person.component';

export interface IPerson {
  id: number,
  name: string,
  age: number,
  address?: string
}

@Component({
  selector: 'app-input',
  imports: [PersonComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  people: IPerson[] = [
    {
      id: 0,
      name: 'Felipe',
      age: 32,
      address: 'Rua Tal da Silva'
    },
    {
      id: 1,
      name: 'Laura',
      age: 27
    }
  ];

  removePerson() {
    this.people.pop()
  }

  getPeopleQuantity() {
    return this.people.length;
  }

  removePersonById(personId: number) {
    this.people = this.people.filter(p => p.id !== personId)
  }
}
