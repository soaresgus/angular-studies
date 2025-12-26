import { Component, inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  readonly _productsService = inject(ProductsService)
  productsList: any[] = []

  ngOnInit() {
    this._productsService.products$.subscribe((productsList) => {
      console.log('productsList', productsList)

      this.productsList = productsList;
    })
  }

  createProduct() {
    this._productsService.addProduct(3, "Projetor", 3200)
  }

  removeProduct() {
    this._productsService.removeProduct(1)
  }

  modifyList() {
    this.productsList = []
  }
}
