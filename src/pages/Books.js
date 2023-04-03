import React, { useEffect } from "react";
import "../style/Books.css";
import Nav from "../components/Nav";
import NewFeature from "../components/NewFeature";
import BookItem from "../components/BookItem";
import { getVolumeByName } from "../api/bookService";
import { http } from "../api/backendService";

function Books() {
  const [books, setBooks] = React.useState([]);


  const getVolumeByName = (name) => {
    http.get(`/volumes?q=${name}&&maxResults=40`).then((res) => {
      setBooks(res.data.items);
    });
  };

  return (
    <div>
      <Nav getVolumeByName={getVolumeByName}></Nav>
      <NewFeature></NewFeature>
      <div className="parent">
        {books.length > 0 ? books.map((book) => {
          return <BookItem book={book}></BookItem>;
        }) : 
        <p>Seach for your favorite book</p>
        }
      </div>
    </div>
  );
}

export default Books;
