import React from "react";
import "../style/BookItem.css";
import { useParams, Navigate } from "react-router-dom";
import { getVolumeById } from "../api/bookService";
import { useEffect } from "react";
import Nav from "../components/Nav";

function DetailedBook() {
  const { id } = useParams();
  const [book, setBook] = React.useState();

  useEffect(() => {
    getVolumeById(id).then((res) => {
      console.log("res", res.data);
      setBook(res.data);
    });
  }, []);

  const getAuthors = () => {
    if (book.volumeInfo.authors) {
      return book.volumeInfo.authors.join(", ");
    } else {
      return "No author available";
    }
  };
  const getImage = () => {
    if (book.volumeInfo?.imageLinks) {
      return book.volumeInfo.imageLinks.thumbnail;
    } else {
      return "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/85132471_10158043671942679_1772724687449620480_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mxPCi1NvJBgAX-dhvO4&_nc_ht=scontent-cph2-1.xx&oh=00_AfBXuT4ZY04Db680XGFq188o1pU_-Q0cKtlBN76HxYBaIw&oe=64528B1B";
    }
  };

  const getPrice = () => {
    if (book.saleInfo?.listPrice) {
      return (
        book.saleInfo.listPrice.amount +
        " " +
        book.saleInfo.listPrice.currencyCode
      );
    } else {
      return "No price available";
    }
  };

  const getDescription = () => {
    if (book.volumeInfo?.description) {
      return book.volumeInfo.description;
    } else {
      return "No description available";
    }
  };

  return book ? (<>
    <Nav></Nav>
    <div
      className="book-item"
    >
      <img src={getImage()} alt="book.title" className="book-image" />
      <div className="book-details">
        <h2 className="book-title">{book.volumeInfo.title}</h2>
        <h3 className="book-author">{getAuthors()}</h3>
        <h4 className="book-author">{getDescription()}</h4>
        <h3 className="book-price">{getPrice()}</h3>
      </div>
    </div>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default DetailedBook;
