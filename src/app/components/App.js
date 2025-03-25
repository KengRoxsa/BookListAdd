"use client";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";
import style from "./app.css";
import axios from "axios";
import BooksContext from "../Context/Books";

function App() {

  const {fetchBooks} = useContext(BooksContext);
  
  useEffect(() => {
    fetchBooks();
  }, []);
  
// function คือ จัดการ edit โดยส่งผ่านไปถึง BookEdit.js เพื่อแก้ title ตาม id
  

  return (<>
    <div className="app-container">
      <h1 className="app-title">📖 Reading Book</h1>
      {/* <h2 className="app-subtitle">
        You are now reading <span className="font-semibold text-blue-500">{books.length}</span> books
      </h2> */}
      <div className="book-create-container">
        <BookCreate  />
        {/* ตรงนี้เคยฝังฟังชันไว้ ในที่นี้คือ oncreate={createBook} */}
      </div>

      <div className="book-list-container">
        <BookList  />
      </div>

      
    </div>
    </>
  );
  
  
}

export default App;
