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
      <h1>ADD BOOK Here !!</h1>
      {books.length}
      <BookList books={books} onDelete={deleteBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
