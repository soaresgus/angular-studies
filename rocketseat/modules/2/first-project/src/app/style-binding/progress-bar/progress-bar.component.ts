import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  progress = 0

  increaseProgress() {
    this.progress = Math.min(this.progress + 30, 300)
  }
}
