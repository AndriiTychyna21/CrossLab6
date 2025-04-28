import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductType, productType } from './products/ProductFabric';

const DEFAULT_TYPE = productType[0];

@Injectable({
  providedIn: 'root'
})

export class ProductTypeSelectorService {
  currentType = DEFAULT_TYPE;

  type$: BehaviorSubject<ProductType> = new BehaviorSubject<ProductType>(DEFAULT_TYPE);

  setType(type: ProductType) {
    this.type$.next(type);
  }
}
