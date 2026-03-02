import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, CurrencyPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-list',
  imports: [MatCardModule, AsyncPipe, CurrencyPipe, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList implements OnInit {

  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}