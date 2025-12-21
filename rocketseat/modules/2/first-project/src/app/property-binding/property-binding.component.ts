import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  text = 'input text'
  inputType = 'text'
  inputDisabled = true

  disableInput() {
    this.inputDisabled = true
  }

  activateInput() {
    this.inputDisabled = false
  }

  logText() {
    console.log("text:", this.text);

  }

  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value

    this.text = value
  }
}
