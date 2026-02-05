import "./BookCard.css";


function BookCard({ book }) {
  return (
    <div className="book-card">
      {/* Image placeholder */}
      <div className="book-image">
        <span>{book.title[0]}</span>
      </div>

      <div className="book-meta">
        <span className="tag">{book.category}</span>
        <span className="status">Available</span>
      </div>

      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">{book.author}</p>
      <p className="book-year">{book.year}</p>
    </div>
  );
}

export default BookCard;
