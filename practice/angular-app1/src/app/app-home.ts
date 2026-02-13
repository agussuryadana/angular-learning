import { Component, inject } from '@angular/core';
import { CarService } from './car.service';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './app-home.html',
  styleUrl: './app.css',
  imports: [DecimalPipe, DatePipe, CurrencyPipe],

})
export class Home {
  carService = inject(CarService);
  display = this.carService.getCars();

  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}