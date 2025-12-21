import { Component } from '@angular/core';

@Component({
  selector: 'app-square-popup',
  imports: [],
  templateUrl: './square-popup.component.html',
  styleUrl: './square-popup.component.css'
})
export class SquarePopupComponent {
  horizontalPosition = 0
  popupHeight = -10

  moveSquare() {
    this.horizontalPosition = (this.horizontalPosition + 10) % 100;
  }

  togglePopup() {
    this.popupHeight = this.popupHeight === -10 ? 10 : -10
  }
}
