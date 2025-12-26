import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private products = new BehaviorSubject<any[]>([
        { id: 1, name: 'Mouse', price: 100 },
        { id: 2, name: 'Monitor', price: 1000 }
    ]);

    readonly products$ = this.products.asObservable().pipe(
        map((products) => structuredClone(products))
    );

    addProduct(id: number, name: string, price: number) {
        const newProductsList = [...this.products.getValue(), { id, name, price }];

        this.products.next(newProductsList)
    }

    removeProduct(id: number) {
        const newProductsList = this.products.getValue().filter((p) => p.id !== id);

        this.products.next(newProductsList)
    }
}
