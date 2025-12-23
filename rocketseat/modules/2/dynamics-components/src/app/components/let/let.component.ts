import { Component } from '@angular/core';

@Component({
  selector: 'app-let',
  imports: [],
  templateUrl: './let.component.html',
  styleUrl: './let.component.css'
})
export class LetComponent {
  people = [
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
}
