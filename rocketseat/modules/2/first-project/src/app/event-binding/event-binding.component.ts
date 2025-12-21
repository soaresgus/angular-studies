import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  onButtonClick() {
    console.log('onButtonClick')
  }

  onInput(event: Event) {
    console.log('onInput')
    console.log('event', event)

    const value = (event.target as HTMLInputElement).value;

    console.log('value:', value)
  }

  onBlur() {
    console.log('blur');
  }

  onFocus() {
    console.log('focus');

  }
}
