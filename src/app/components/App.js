"use client";
import React, { use } from "react";
import { useState, useEffect } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";
import style from "./app.css";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([
    // { id: 1, title: "The Great Gatsby" },
    // { id: 2, title: "To Kill a Mockingbird" },
    // { id: 3, title: "Pride and Prejudice" },
    // { id: 4, title: "The Catcher in the Rye" },
  ]);
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }
  useEffect(() => {
    fetchBooks();
  }, []);
  
// function คือ จัดการ edit โดยส่งผ่านไปถึง BookEdit.js เพื่อแก้ title ตาม id
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, { title: newTitle });


    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      console.log(response.data);
      return book;
    })
    setBooks(updateBooks);
  }

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updateBooks = books.filter((book) => book.id !== id);
    setBooks(updateBooks);
    console.log(updateBooks);
  };
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    const updateBooks = [
      ...books,
      response.data
    ];
    setBooks(updateBooks);
    // console.log(updateBooks);
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
