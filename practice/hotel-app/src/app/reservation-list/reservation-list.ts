import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { ReservationModel } from '../models/reservation.model';
import { RouterLink } from "@angular/router";
import { RouterModule } from '@angular/router';
import { Home } from '../home/home';

@Component({
  standalone: true,
  selector: 'app-reservation-list',
  imports: [Home, RouterLink, RouterModule],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css',
})

export class ReservationList implements OnInit {
  reservations: ReservationModel[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(reservations => {
      this.reservations = reservations
      console.log("COMPONENT DATA:", reservations);
    });
  }

  deleteReservation(id: string){
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("Delete request got processed.")
    })
  }
}