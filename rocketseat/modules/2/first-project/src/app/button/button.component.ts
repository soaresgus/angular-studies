import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  filter() {
    console.log('filter called')
  }

  clear() {
    console.log('clear called')
  }

}
