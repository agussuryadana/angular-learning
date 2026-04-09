import { Component, signal, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css',
})


/*
export class App {
  protected readonly title = signal('signal-example');

  theme = signal('light');
  label = this.theme();

  constructor() {
    effect(() => {
      this.label = this.theme();
    });
  }

  toggleDarkMode(){
    this.theme.update(currentValue => currentValue === 'light'? 'dark' : 'light')
  }
}


export class App {
  protected readonly title = signal('signal-example');

  price = 19;
  quantity = signal(10);
  totalPrice = computed(() => this.price * this.quantity( ))

  changeQuantity(event: Event){
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber);
  }
}

*/

export class App {
  products = signal([
    {id:1, name: "Milk", price: 2.45},
    {id:2, name: "Bread", price: 3.25},
    {id:3, name: "Tomatoes", price: 1.20}
  ])

  filterName = signal('');
  filteredProducts = computed(() => {
    return this.products().filter(
      product => product.name
      .toLowerCase()
      .includes(this.filterName().toLowerCase()))
  });

  changeFilter(event:Event){
    let newFilterName = (event.target as HTMLInputElement).value;
    this.filterName.set(newFilterName);
  }
}