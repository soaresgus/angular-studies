import { Component } from '@angular/core';
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { ShadowHostComponent } from "./components/shadow-dom/shadow-host/shadow-host.component";

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent, UserDetailsComponent, ShadowHostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'view-encapsulation';
}
