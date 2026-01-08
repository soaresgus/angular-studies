import { Component } from '@angular/core';
import { CustomPipe } from './components/custom-pipe/custom-pipe';

@Component({
  selector: 'app-root',
  imports: [CustomPipe],
  template: `<app-custom-pipe />`,
})
export class App {
}
