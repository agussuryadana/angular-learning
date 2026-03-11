import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  users = [
    {id: 1, name: 'Agus'},
    {id: 2, name: 'Surya'}
  ]
  
  getUsers(){
    return of(this.users)
  }
}
