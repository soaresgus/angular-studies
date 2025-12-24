import { Component } from '@angular/core';
import { UsingImagesComponent } from "./components/using-images/using-images.component";
import { UsingSvgComponent } from "./components/using-svg/using-svg.component";
import { UsingFontsComponent } from "./components/using-fonts/using-fonts.component";

@Component({
  selector: 'app-root',
  imports: [UsingImagesComponent, UsingSvgComponent, UsingFontsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'using-assets';
}
