import { Component } from '@angular/core';

@Component({
  selector: 'app-active-button',
  imports: [],
  templateUrl: './active-button.component.html',
  styleUrl: './active-button.component.css'
})
export class ActiveButtonComponent {
  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive
  }
}
