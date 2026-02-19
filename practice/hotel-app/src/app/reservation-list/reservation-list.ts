import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { ReservationModel } from '../models/reservation.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-list',
  imports: [CommonModule],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css',
})

export class ReservationList implements OnInit {
  reservations: ReservationModel[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }
}
