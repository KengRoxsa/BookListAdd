"use client";
import  { useState,useContext } from "react";
import React from 'react'
import BooksContext from "../Context/Books";

function BookEdit({book,onSubmit}) {

    const {editBookById} = useContext(BooksContext);
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Save</button>
    </form>
  )
}

export default BookEdit