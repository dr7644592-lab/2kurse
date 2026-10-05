import { type Book } from "../../types/book";
import "./BookCard.css";

interface BookCardProps {
  book: Book;
}

const statusText = {
  want: "Хочу прочитать",
  reading: "Читаю",
  done: "Прочитано",
};

export function BookCard({ book }: BookCardProps) {
  const rating = book.rating || 0;
  const stars = "★".repeat(rating);

  return (
    <article className="book-card">
      <div
        className={`book-card__cover book-card__cover--${book.status}`}
      >
        <span className="book-card__cover-title">
          {book.title}
        </span>
      </div>

      <div className="book-card__content">
        <h3 className="book-card__title">
          {book.title}
        </h3>

        <p className="book-card__author">
          {book.author}
        </p>

        <span
          className={`book-card__badge book-card__badge--${book.status}`}
        >
          {statusText[book.status]}
        </span>

        {book.status === "done" ? (
          <>
            <p className="book-card__info">
              Оценка:{" "}
              <span className="book-card__stars">
                {stars}
              </span>{" "}
              {rating}/5
            </p>

            {book.note && (
              <p className="book-card__info">
                Заметка: {book.note}
              </p>
            )}
          </>
        ) : (
          <p className="book-card__info">
            Оценка будет доступна после прочтения
          </p>
        )}
      </div>

      <button
        type="button"
        className="book-card__delete"
        aria-label="Удалить книгу"
      >
        🗑️
      </button>
    </article>
  );
}