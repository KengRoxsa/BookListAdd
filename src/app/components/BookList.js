"use client";
import App from "./App";
import React from 'react'
import BookShow from './BookShow';

function BookList({books,onDelete,onEdit}) {
    if (!Array.isArray(books)) {
        console.error("Error: books is not an array or is undefined!", books);
        return <p></p>;  // ให้ข้อความถ้า books ไม่ใช่ array
      }
    const renderBooks = books.map((book)=>{
        return <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete}/>
    })

  return (
    <div className="book-list-container">{renderBooks}</div>
  )
}

export default BookList