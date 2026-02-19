import { Injectable } from '@angular/core';
import { ReservationModel } from '../models/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: ReservationModel[] = [];

  constructor(){
     let savedReservations = localStorage.getItem("reservations");
     this.reservations = savedReservations? JSON.parse(savedReservations) : [];
  }

  getReservations(): ReservationModel[]{
    return this.reservations;
  }

  getReservation(id: string): ReservationModel | undefined{
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: ReservationModel): void {
    this.reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1)
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  updateReservation(updatedReservation: ReservationModel): void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

}
