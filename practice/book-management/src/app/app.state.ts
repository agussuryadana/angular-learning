import { BookInterface } from "./models/book.interface";

export interface AppState {
    readonly book: BookInterface[]
}
