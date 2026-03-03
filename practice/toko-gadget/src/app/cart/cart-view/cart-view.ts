import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/product';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { AsyncPipe, CurrencyPipe, CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-cart-view',
  imports: [MatCardModule, MatListModule, MatIconModule, MatButtonModule, AsyncPipe, CurrencyPipe, CommonModule],
  templateUrl: './cart-view.html',
  styleUrl: './cart-view.css',
})
export class CartView implements OnInit{

  cartItems$! : Observable<Product[]>
  total$!: Observable<number>;

  constructor(private cartService: CartService){}
  
  ngOnInit(): void {
    this.cartItems$ = this.cartService.getCartItems();

    this.total$ = this.cartItems$.pipe(
    map(items => items.reduce((t, i) => t + i.price, 0))
  );
  }

}
