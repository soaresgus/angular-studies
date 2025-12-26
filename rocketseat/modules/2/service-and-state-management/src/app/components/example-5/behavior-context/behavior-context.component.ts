import { Component, inject, OnInit } from '@angular/core';
import { ContextService } from '../context.service';

@Component({
  selector: 'app-behavior-context',
  imports: [],
  templateUrl: './behavior-context.component.html',
  styleUrl: './behavior-context.component.css'
})
export class BehaviorContextComponent implements OnInit {
  private readonly _contextService = inject(ContextService)

  ngOnInit(): void {
    this._contextService.items$.subscribe((value) => {
      console.log('Valor:', value)
    })

    this._contextService.addItem({ name: 'teste', price: 123 })
  }
}
