import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, CurrencyPipe, CommonModule } from '@angular/common';
import { Observable, BehaviorSubject, combineLatest, map } from 'rxjs';
import { CartService } from '../../cart/cart.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-product-list',
  imports: [MatCardModule, AsyncPipe, CurrencyPipe, CommonModule, MatSnackBarModule, MatInputModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList implements OnInit {

  products$!: Observable<Product[]>;
  products: Product[] = []
  filteredProducts: Product[] = []

  constructor(private productService: ProductService, private cartService: CartService, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();

    this.products$.subscribe(products => {
      this.products = products
      this.filteredProducts = products
    })
  }

  addToCart(product: Product): void{
    this.cartService.addToCart(product).subscribe({
      next:() => {
        this.snackbar.open("Added to Cart", "", {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        })
      }
    });
  }

  applyFilter(event: Event): void {
    const term = (event.target as HTMLInputElement).value.toLowerCase()

    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(term)
    )
  }
}