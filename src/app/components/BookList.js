"use client";

import React from 'react'
import BookShow from './BookShow';
import { useContext } from "react";
import BooksContext from '../Context/Books';

function BookList() {

  const {books} = useContext(BooksContext);
  // อันล่างนี่เดี้ยวไม่ใช้แล้ว
  const { count, incrementCount } = useContext(BooksContext);

    if (!Array.isArray(books)) {
        console.error("Error: books is not an array or is undefined!", books);
        return <p></p>;  // ให้ข้อความถ้า books ไม่ใช่ array
      }
    const renderBooks = books.map((book)=>{
        return <BookShow  key={book.id} book={book} />
    })

  return (
    
    <div className="book-list-container">
      {renderBooks}
      {/* test context {count}
      <button onClick={incrementCount}>test incrementCount</button> */}
      </div>
  )
}

export default BookList