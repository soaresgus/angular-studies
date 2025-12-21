import { Component } from '@angular/core';
import { ButtonComponent } from "./button/button.component";
import { FlatButtonComponent } from "./flat-button/flat-button.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";
import { DinamicTextComponent } from './style-binding/dinamic-text/dinamic-text.component';
import { ProgressBarComponent } from "./style-binding/progress-bar/progress-bar.component";
import { SquarePopupComponent } from "./style-binding/square-popup/square-popup.component";
import { ActiveButtonComponent } from "./class-binding/active-button/active-button.component";

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, FlatButtonComponent, EventBindingComponent, PropertyBindingComponent, TwoWayDataBindingComponent, DinamicTextComponent, ProgressBarComponent, SquarePopupComponent, ActiveButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
