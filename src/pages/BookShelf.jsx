import BookCard from "../components/BookCard";
import "../styles/BookShelf.css";
import { useState } from "react";


const categories = [
  "All",
  "Science Fiction",
  "Fiction",
  "Romance",
  "Fantasy",
];

const books = [
  { id: 1, title: "1984", author: "George Orwell", year: "1949", category: "Science Fiction" },
  { id: 2, title: "Brave New World", author: "Aldous Huxley", year: "1932", category: "Science Fiction" },
  { id: 3, title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: "1967", category: "Fiction" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: "1813", category: "Romance" },
];

function BookShelf() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase());

    const matchesCategory =
      category === "All" || book.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bookshelf">
      {/* Header */}
      <div className="collection-header">
        <span className="collection-tag">Our Collection</span>
        <h1>Browse All Books</h1>
        <p>
          Explore our extensive collection of books spanning every genre and era.
        </p>
      </div>

      {/* Filters */}
      <div className="collection-filters">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by title or author..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${category === cat ? "active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Books grid */}
      <div className="books-grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookShelf;
