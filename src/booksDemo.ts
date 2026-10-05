import { initialBooks } from "./data/books";
import getBooksByStatus from "./utils/getBookByStatus";

const completedBooks = getBooksByStatus(
  initialBooks,
  "done"
);

console.log(
  "Прочитанные книги:",
  completedBooks
);
