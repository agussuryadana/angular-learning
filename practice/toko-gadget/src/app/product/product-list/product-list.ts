import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
import {MatCardModule} from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product-list',
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  // use a lowercase name for the array and avoid conflicting with the type
  products: Product[] = [];

  constructor(private ProductService: ProductService){}

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

}
