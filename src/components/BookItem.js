import React from 'react';
import '../style/BookItem.css';

function BookItem({ book }) {
  return (
    <div className="book-item">
      <img src="" alt="book.title" className="book-image" />
      <div className="book-details">
        <h2 className="book-title">book.title</h2>
        <h3 className="book-author">book.author</h3>
        <button className="book-price">$book.price</button>
      </div>
    </div>
  );
}

export default BookItem;
