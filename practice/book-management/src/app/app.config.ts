import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { BookReducer } from './books/book.reducer';
import { provideEffects } from '@ngrx/effects';
import { BookEffects } from './books/books.effects';
import { routes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({ book: BookReducer }),
    provideEffects(BookEffects),
    provideStoreDevtools({
      maxAge: 25
    })
  ]
};