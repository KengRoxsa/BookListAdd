"use client";
import React from "react";
import { useState } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "To Kill a Mockingbird" },
  ]);
// function คือ จัดการ edit โดยส่งผ่านไปถึง BookEdit.js เพื่อแก้ title ตาม id
  const editBookById = (id, newTitle) => {
    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    })
    setBooks(updateBooks);
  }

  const deleteBook = (id) => {
    const updateBooks = books.filter((book) => book.id !== id);
    setBooks(updateBooks);
    console.log(updateBooks);
  };
  const createBook = (title) => {
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(updateBooks);
    console.log(updateBooks);
  };

  return (
    <div className="app">
      <h1>Reading Book</h1>
      <h1>you are now Reading{books.length} books</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
