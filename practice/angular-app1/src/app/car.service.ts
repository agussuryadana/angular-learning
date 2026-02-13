import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CarService {
  cars = ['Avanza', 'Kijang', 'Ferarri'];

  getCars(): string[]{
    return this.cars;
  }

  getCar(id: number){
    return this.cars[id];
  }
}