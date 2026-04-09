import { createAction, props } from "@ngrx/store";
import { BookInterface } from "../models/book.interface";

export const AddBook = createAction('[Book] Add Book', props<BookInterface>());
export const AddBookSuccess = createAction('[Book] Add Book Success', props<BookInterface>());
export const AddBookFailure = createAction('[Book] Add Book Failure', props<{error:any}>());

export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>());