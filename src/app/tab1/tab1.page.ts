import { Component, OnInit} from '@angular/core';
import { IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { MyHeaderComponent } from "../my-header/my-header.component";
import { ReadDataService } from '../read-data.service';
import { NgFor, NgIf } from '@angular/common'; // Import NgFor
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from "../edit-product/edit-product.component";
import { iProduct } from '../products/iProduct';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [AddProductComponent, IonButton, NgFor, NgIf, IonContent, MyHeaderComponent, IonList, IonItem, IonLabel, EditProductComponent],
})

export class Tab1Page implements OnInit{
  showAddForm = false;
  showEditForm = false;
  selectedProduct: iProduct | null = null;
  constructor(public dataService: ReadDataService) {}
  ngOnInit() {
    this.dataService.load();  
  }
  
  addFormShow(){
    this.showAddForm = true;
  }

  addProduct($event: any){
    this.dataService.addProduct($event)
    this.showAddForm = false;
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
  }

  deleteProduct(removedProduct: iProduct) {
    const index = this.dataService.products.findIndex(product => product === removedProduct);
    if (index !== -1) {
      this.dataService.products.splice(index, 1);
    }
  }
  
}
