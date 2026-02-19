import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { ReservationModel } from '../models/reservation.model';

@Component({
  standalone: true,
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css',
})
export class ReservationForm implements OnInit{

  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService){
  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['',Validators.required],
      checkOutDate: ['',Validators.required],
      guestName: ['',Validators.required],
      guestEmail: ['',[Validators.required, Validators.email]],
      roomNumber: ['',Validators.required],
    })
  }

  onSumbit(){
    if(this.reservationForm.valid){

      let reservation: ReservationModel = this.reservationForm.value
      this.reservationService.addReservation(reservation)
    }
  }
}
