import { Component, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-shadow-host',
  imports: [ChildComponent],
  template: `
    <p>
      shadow-host works!
    </p>

    <app-child />

    <div class="dark-theme">
      <app-child />
    </div>
    `,
  styles: `
    p {
      color: red;
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowHostComponent {

}
