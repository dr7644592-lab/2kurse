import { type Book } from "../types/book";

export const initialBooks: Book[] = [
  {
    id: 1,
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    status: "done",
    rating: 5,
    note: "Сильная книга о совести и искуплении.",
  },
  {
    id: 2,
    title: "Три товарища",
    author: "Эрих Мария Ремарк",
    status: "reading",
  },
  {
    id: 3,
    title: "Мы",
    author: "Евгений Замятин",
    status: "want",
  },
];