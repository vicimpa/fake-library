import { writable } from "svelte/store";
import { counter } from "../library/counter";

const bookId = counter();

export class Book {
  id?: number;
  title = '';
  author = '';
  pages = 0;
  isRead = false;
}


export const makeEmptyBook = () => new Book();
export const bookStore = writable([] as Book[]);

export const saveBook = (book: Book) => {
  bookStore.update((books) => {
    const index = books.findIndex(e => e.id === book.id);
    book.id = book.id ?? bookId();

    if (index === -1)
      return books.toSpliced(0, 0, book);

    return books.toSpliced(index, 1, book);
  });
};

export const deleteeBook = (book: Book) => {
  bookStore.update((books) => {
    const index = books.findIndex(e => e.id === book.id);

    if (index !== -1)
      return books.toSpliced(index, 1);

    return books;
  });
};