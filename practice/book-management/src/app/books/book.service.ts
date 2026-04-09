import { Injectable } from '@angular/core';
import { BookInterface } from '../models/book.interface';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  
  constructor() {}

  addBook(book: BookInterface): Observable<BookInterface>{
    return of(book);
  }
}
