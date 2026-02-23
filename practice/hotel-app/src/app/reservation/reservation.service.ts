import { Injectable } from '@angular/core';
import { ReservationModel } from '../models/reservation.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {

  private apiURL = "http://localhost:3001"

  constructor (private http: HttpClient){}

  getReservations(): Observable<ReservationModel[]>{
    return this.http.get<ReservationModel[]>(this.apiURL + "/reservations");
  }

  getReservation(id: string): Observable<ReservationModel>{
    return this.http.get<ReservationModel>(this.apiURL + "/reservations/"+id);
  }

  addReservation(reservation: ReservationModel): Observable<void> {
    return this.http.post<void>(this.apiURL + "/reservations/", reservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiURL + "/reservations/"+id);
  }

  updateReservation(id: string, updatedReservation: ReservationModel): Observable<void> {
    return this.http.put<void>(this.apiURL + "/reservations/" + id, updatedReservation);
  }
}