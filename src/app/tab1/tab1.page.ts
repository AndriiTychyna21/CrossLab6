import { Component, OnInit} from '@angular/core';
import { IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { MyHeaderComponent } from "../my-header/my-header.component";
import { ReadDataService } from '../read-data.service';
import { NgFor, NgIf } from '@angular/common'; // Import NgFor
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from "../edit-product/edit-product.component";
import { iProduct } from '../products/iProduct';
import { ProductTypeSelectorService } from '../product-type-selector.service';
import { Subscription } from 'rxjs';
import { productType } from '../products/ProductFabric';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [AddProductComponent, IonButton, NgFor, NgIf, IonContent, MyHeaderComponent, IonList, IonItem, IonLabel, EditProductComponent],
})

export class Tab1Page implements OnInit{
  searchProducts: iProduct[] = []
  showAddForm = false;
  showEditForm = false;
  selectedProduct: iProduct | null = null;
  count = 0;
  type = productType[0];
  private subscriptions: Subscription[] = [];
  constructor(public dataService: ReadDataService, public productTypeService: ProductTypeSelectorService) {
  }

  ngOnInit() { 
    this.dataService.load();

    const loadSub = this.dataService.loaded$.pipe(
      filter(loaded => loaded)
    ).subscribe(() => {
      this.search(this.type);
    });
    this.subscriptions.push(loadSub);

    const typeSub = this.productTypeService.type$.subscribe(() => {
      let type = this.productTypeService.type$.value;
      this.search(type);
    });
  
    this.subscriptions.push(typeSub);
    this.search(this.type);
    }
  
  addFormShow(){
    this.showAddForm = true;
  }

  addProduct($event: any){
    this.dataService.addProduct($event)
    this.showAddForm = false;
    this.search(this.type);
  }

  editProduct(product: iProduct){
    this.selectedProduct = product;
    this.showEditForm = true;
  }

  onProductEdit(updatedProduct: iProduct) {
    if (this.selectedProduct != null){
      const index = this.dataService.products.indexOf(this.selectedProduct); 
      if (index !== -1) {
        updatedProduct.setID(this.selectedProduct.getID());
        this.dataService.products[index] = updatedProduct;  
        this.showEditForm = false; 
      }
    }
    this.search(this.type)
  }

  deleteProduct(removedProduct: iProduct) {
    const index = this.dataService.products.findIndex(product => product === removedProduct);
    if (index !== -1) {
      this.dataService.products.splice(index, 1);
    }
    this.search(this.type);
  }
  
  search(type: string){
    this.searchProducts = this.dataService.products.filter((product) => {
      return product.getType() == type;
    })
  }

  nextType(){
    this.count = this.count < productType.length - 1 ? this.count + 1 : 0;
    this.productTypeService.setType(productType[this.count]);
    this.type = productType[this.count];
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
