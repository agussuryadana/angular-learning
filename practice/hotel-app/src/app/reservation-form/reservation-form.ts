import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation/reservation.service';
import { ReservationModel } from '../models/reservation.model';
import { Home } from '../home/home';

@Component({
  standalone: true,
  selector: 'app-reservation-form',
  imports: [Home, FormsModule, ReactiveFormsModule],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css',
})
export class ReservationForm implements OnInit{

  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['',Validators.required],
      checkOutDate: ['',Validators.required],
      guestName: ['',Validators.required],
      guestEmail: ['',[Validators.required, Validators.email]],
      roomNumber: ['',Validators.required],
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')
    
    if (id){
      this.reservationService.getReservation(id).subscribe(reservation => {
        if (reservation) {
          this.reservationForm.patchValue(reservation)
        }
      })
    }
  }

  onSumbit(){
    if(this.reservationForm.valid){

      let reservation: ReservationModel = this.reservationForm.value


    let id = this.activatedRoute.snapshot.paramMap.get('id')
    
    if (id){
      // update
      this.reservationService.updateReservation(id, reservation).subscribe(() => {
        console.log("Update request processed")
      })
    } else {
      // new
      this.reservationService.addReservation(reservation).subscribe(() => {
        console.log("Create request processed")
      })
    }

      this.router.navigate(['/list'])

    }
  }
}
