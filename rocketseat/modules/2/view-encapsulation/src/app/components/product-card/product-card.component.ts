import { Component, ViewEncapsulation } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button.component";

@Component({
  selector: 'app-product-card',
  imports: [CustomButtonComponent],
  template: `
    <p>
      product-card works!
    </p>

    <app-custom-button />
  `,
  styles: `
    p {
      font-weight: bold;
    }
  `,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProductCardComponent {

}
