"use client";
import { useState,useContext } from "react";
import React from 'react'
import BookEdit from "./BookEdit";
import BooksContext from "../Context/Books";

function BookShow({book}) {
  // book ตัวนี้คือรับจาก booklist 
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBook} = useContext(BooksContext);

    const handleClick = () => {
      deleteBook(book.id)
    }
    const handleSubmit = () => {
      setShowEdit(false);
    }

    const handleEdit = () => {
        setShowEdit(!showEdit);
    }
    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit  onSubmit={handleSubmit} book={book}/>
    }

    return (
      <div className="flex flex-col items-center justify-center space-y-4 p-4">
        <img
          className="rounded-lg shadow-lg"
          src={`https://picsum.photos/seed/${book.id}/300/200`}
          alt={book.title}
        />
        <div className="text-center text-xl font-semibold">{content}</div>
        <div className="flex gap-5">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={handleClick}
          >
            Delete
          </button>
        </div>
      </div>
    );
    
}

export default BookShow