import { Component } from '@angular/core';

@Component({
  selector: 'app-dinamic-text',
  imports: [],
  template: `
    <p [style.font-size.rem]="textSizeRem">
      Este texto tem um tamanho dinâmico.
    </p>

    <button (click)="increaseText()">Tamanho +</button>
    <button (click)="decreaseText()">Tamanho -</button>
  `,
  styles: ``,
})
export class DinamicTextComponent {
  textSizeRem = 1.2

  increaseText() {
    this.textSizeRem = Math.min(this.textSizeRem + 0.2, 2.0)
  }

  decreaseText() {
    this.textSizeRem = Math.max(this.textSizeRem - 0.2, 0.8)
  }

}
