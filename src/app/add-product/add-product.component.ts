import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonCard, IonItem, IonButton } from '@ionic/angular/standalone';
import { dateValidator } from '../validator/dateValidator';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  imports: [ReactiveFormsModule, CommonModule, IonCard, IonItem, IonButton],
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  @Output() productAdd = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      type: ['', Validators.required],
      id: [null, [Validators.required, Validators.min(0)]],
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0.01)]],

      // специфічні
      size: [''],
      color: [''],
      volume: [null, [Validators.min(200), Validators.max(2000)]],
      row: [null, [Validators.min(1), Validators.max(10)]],
      place: [null, [Validators.min(1), Validators.max(10)]],
      hall: [null, [Validators.min(1), Validators.max(10)]],
      date: ['', dateValidator()]
    });
  }

  onTypeChange(event: Event) {
   
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productAdd.emit(this.productForm.value); 
    }
  }
}
