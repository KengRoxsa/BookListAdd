"use client";
import React from "react";
import { useState } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";
import style from "./app.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "To Kill a Mockingbird" },
    { id: 3, title: "Pride and Prejudice" },
    { id: 4, title: "The Catcher in the Rye" },
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

  return (<>
    <div className="app-container">
      <h1 className="app-title">📖 Reading Book</h1>
      <h2 className="app-subtitle">
        You are now reading <span className="font-semibold text-blue-500">{books.length}</span> books
      </h2>
      <div className="book-create-container">
        <BookCreate onCreate={createBook} />
      </div>

      <div className="book-list-container">
        <BookList onEdit={editBookById} books={books} onDelete={deleteBook} />
      </div>

      
    </div>
    </>
  );
  
  
}

export default App;
