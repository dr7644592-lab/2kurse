import { initialBooks } from "./data/books";
import { BookList } from "./components/BookList/BookList";
import { Stats } from "./components/Stats/stats";
import { TicketStatsDemo } from "./demos/TicketStatsDemo";
import { WarehouseStatsDemo } from "./demos/WarehouseStatsDemo";
import "./App.css";

export default function App() {
  const pageTitle = "Читательский дневник";
  const pageSubtitle =
    "Сохраняйте книги и следите за прогрессом чтения";

  return (
    <main className="page">
      <header className="page__header">
        <h1 className="page__title">
          {pageTitle}
        </h1>

        <p className="page__subtitle">
          {pageSubtitle}
        </p>
      </header>

      <Stats books={initialBooks} />

      <BookList books={initialBooks} />

      <TicketStatsDemo />

      <WarehouseStatsDemo />

      <section className="new-book">
        <h2 className="new-book__title">
          Добавить книгу
        </h2>

        <form className="book-form">
          <div className="book-form__field">
            <label htmlFor="book-title">
              Название
            </label>
            <input
              type="text"
              id="book-title"
              name="title"
            />
          </div>

          <div className="book-form__field">
            <label htmlFor="book-author">
              Автор
            </label>
            <input
              type="text"
              id="book-author"
              name="author"
            />
          </div>

          <div className="book-form__field">
            <label htmlFor="book-status">
              Статус
            </label>
            <select id="book-status" name="status">
              <option value="want">
                Хочу прочитать
              </option>
              <option value="reading">
                Читаю сейчас
              </option>
              <option value="done">
                Прочитано
              </option>
            </select>
          </div>

          <button type="submit" className="book-form__submit">
            Добавить книгу
          </button>
        </form>
      </section>
    </main>
  );
}