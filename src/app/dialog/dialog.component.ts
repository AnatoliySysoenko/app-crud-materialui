import { Component, OnInit } from '@angular/core';
import { PRODUCT_CONDITION_LIST } from '../shared/mock/product.mock';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  form!: FormGroup;

  productConditionList = PRODUCT_CONDITION_LIST;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      date: ['', [Validators.required]],
      productCondition: ['', [Validators.required]],
      price: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    });
  }

  addProduct(): void {
    console.log(this.form.value);
  }

}
