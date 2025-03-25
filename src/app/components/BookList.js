"use client";

import React from 'react'
import BookShow from './BookShow';
import { useContext } from "react";
import BooksContext from '../Context/Books';
function BookList({books,onDelete,onEdit}) {

  const { count, incrementCount } = useContext(BooksContext);

    if (!Array.isArray(books)) {
        console.error("Error: books is not an array or is undefined!", books);
        return <p></p>;  // ให้ข้อความถ้า books ไม่ใช่ array
      }
    const renderBooks = books.map((book)=>{
        return <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete}/>
    })

  return (
    
    <div className="book-list-container">
      {renderBooks}
      test context {count}
      <button onClick={incrementCount}>test incrementCount</button>
      </div>
  )
}

export default BookList