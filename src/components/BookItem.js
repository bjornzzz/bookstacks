import React from 'react';
import '../style/BookItem.css';
import { useParams, Navigate, useNavigate } from "react-router-dom";

function BookItem({ book }) {
  const navigate = useNavigate();

  const getImage = () => {
    if (book.volumeInfo?.imageLinks) {
      return book.volumeInfo.imageLinks.thumbnail;
    } else {
      return 'https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/85132471_10158043671942679_1772724687449620480_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mxPCi1NvJBgAX-dhvO4&_nc_ht=scontent-cph2-1.xx&oh=00_AfBXuT4ZY04Db680XGFq188o1pU_-Q0cKtlBN76HxYBaIw&oe=64528B1B';
    }
  };

  const getPrice = () => {
    if(book.saleInfo?.listPrice) {
      return book.saleInfo.listPrice.amount + " " + book.saleInfo.listPrice.currencyCode;
    } else {
      return "No price available";
    }
  }

  return (
    <div className="book-item" >
      <img src={getImage()} alt="book.title" className="book-image" />
      <div className="book-details">
        <h2 className="book-title">{book.volumeInfo.title}</h2>
        <h3 className="book-author">{book.volumeInfo.authors}</h3>
        <button className="book-price" onClick={() => navigate(`${book.id}`)}>{getPrice()}</button>
      </div>
    </div>
  );
}

export default BookItem;
