"use client";
import  { useState } from "react";
import React from 'react'

function BookEdit({book,onSubmit}) {

    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id,title);
        console.log("new Title ",title);
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