import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { iProduct } from '../products/iProduct';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductFabric } from '../products/ProductFabric';
import { nameValidator } from '../validator/nameValidator';
import { Ticket } from '../products/Ticket';
import { Popcorn } from '../products/Popcorn';
import { Glasses } from '../products/Glasses';
import { Drink } from '../products/Drink';
import { dateValidator } from '../validator/dateValidator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
})

export class EditProductComponent implements OnInit {
  @Input() product!: iProduct;
  @Output() productEdit: EventEmitter<iProduct> = new EventEmitter<iProduct>();
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      formData.type = this.product.getType();
      const product = ProductFabric.getProduct(formData);
      this.productEdit.emit(product);
    } else {
      console.error('Form is invalid');
    }
  }

  getRow(): number {
    if (this.product instanceof Ticket) {
      return this.product.getRow();
    }
    return 0;
  }

  getPlace(): number {
    if (this.product instanceof Ticket) {
      return this.product.getPlace();
    }
    return 0;
  }

  getHall(): number {
    if (this.product instanceof Ticket) {
      return this.product.getHall();
    }
    return 0;
  }

  getDate(): string {
    if (this.product instanceof Ticket) {
      return this.product.getDate();
    }
    return '';
  }

  getSize(): string {
    if (this.product instanceof Popcorn || this.product instanceof Glasses) {
      return this.product.getSize();
    }
    return '';
  }

  getColor(): string {
    if (this.product instanceof Glasses) {
      return this.product.getColor();
    }
    return '';
  }

  getVolume(): number {
    if (this.product instanceof Drink) {
      return this.product.getVolume();
    }
    return 0;
  }

  ngOnInit() {

    this.productForm = this.fb.group({
      name: [this.product.getName(), [Validators.required, Validators.minLength(3), nameValidator()]],
      price: [this.product.getPrice(), [Validators.required, Validators.min(0.01)]],
    });
    this.formConstructor(this.product.getType(), this.productForm, this.fb);
  }

  formConstructor(type: string, form: FormGroup, fb: FormBuilder): void {
    switch (type) {
      case 'popcorn':
        form.addControl('size', fb.control(this.getSize(), [Validators.required]));
        break;
      case 'glasses':
        form.addControl('color', fb.control(this.getColor(), [Validators.required]));
        form.addControl('size', fb.control(this.getSize(), [Validators.required]));
        break;
      case 'drink':
        form.addControl('volume', fb.control(this.getVolume(), [Validators.required, Validators.min(1)]));
        break;
      case 'ticket':
        form.addControl('row', fb.control(this.getRow(), [Validators.required, Validators.min(1), Validators.max(10)]));
        form.addControl('place', fb.control(this.getPlace(), [Validators.required, Validators.min(1), Validators.max(10)]));
        form.addControl('hall', fb.control(this.getHall(), [Validators.required, Validators.min(1), Validators.max(10)]));
        form.addControl('date', fb.control(this.getDate(), [Validators.required, dateValidator()]));
        break;
      default:
        break;
    }
  }
}
