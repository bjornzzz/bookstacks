import React from 'react';
import '../style/Books.css'
import Nav from '../components/Nav';
import NewFeature from '../components/NewFeature';
import BookItem from '../components/BookItem';

function Books(){


    return(
        <div>
            <Nav></Nav>
            <NewFeature></NewFeature>
            <div className="parent">
                <BookItem></BookItem>
                <BookItem></BookItem>
                <BookItem></BookItem>
                <BookItem></BookItem>
                <BookItem></BookItem>
                <BookItem></BookItem>
                <BookItem></BookItem>
                <BookItem></BookItem>
            </div>

        </div>
    )
}

export default Books;