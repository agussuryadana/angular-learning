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
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id: string){
    this.reservationService.deleteReservation(id);
  }
}
