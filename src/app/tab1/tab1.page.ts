import { Component, OnInit} from '@angular/core';
import { IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { MyHeaderComponent } from "../my-header/my-header.component";
import { ReadDataService } from '../read-data.service';
import { NgFor, NgIf } from '@angular/common'; // Import NgFor
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [AddProductComponent, IonButton, NgFor, NgIf, IonContent, MyHeaderComponent, IonList, IonItem, IonLabel],
})

export class Tab1Page implements OnInit{
  showAddForm = false;
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
}
