import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <p>
      child works!
    </p>
  `,
  styles: `
    :host {
      display: block;
      border: 1px solid #ddd;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin: 20px;
      padding: 0;
      width: 300px;
      float: left;
    }

    :host(:hover) {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
      transition: all 0.2s ease-in-out;
    }

    :host-context(.dark-theme) {
      background-color: #7f7f7f;
    }
  `
})
export class ChildComponent {

}
