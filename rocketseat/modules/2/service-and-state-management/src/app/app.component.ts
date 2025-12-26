import { Component } from '@angular/core';
import { ProductsComponent } from "./components/example-1/products/products.component";
import { ObservablesComponent } from "./components/example-2/observables/observables.component";
import { SubjectComponent } from "./components/example-3/subject/subject.component";
import { BehaviorSubjectComponent } from "./components/example-4/behavior-subject/behavior-subject.component";
import { BehaviorContextComponent } from "./components/example-5/behavior-context/behavior-context.component";

@Component({
  selector: 'app-root',
  imports: [ProductsComponent, ObservablesComponent, SubjectComponent, BehaviorSubjectComponent, BehaviorContextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
