import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { ReservationModel } from '../models/reservation.model';
import { RouterLink } from "@angular/router";
import { RouterModule } from '@angular/router';
import { Home } from '../home/home';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-reservation-list',
  imports: [AsyncPipe,Home, RouterLink, RouterModule],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css',
})

export class ReservationList implements OnInit {

  constructor(private reservationService: ReservationService) {}

  reservations$!: Observable<ReservationModel[]>;

  ngOnInit(): void {
    this.reservations$ = this.reservationService.getReservations();
  }

  deleteReservation(id: string){
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("Delete request got processed.")
    })
  }
}