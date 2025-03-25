"use client";
import React, { useState,useContext } from "react";
import BooksContext from "../Context/Books";

function BookCreate() {
  const {createBook} = useContext(BooksContext);
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle(""); // ล้างค่า input หลังจาก submit
  };

  return (
    <>
      <h1>BookCreate</h1>
      <form onSubmit={handleSubmit}>
        <label>Name Your Book : </label>
        <input value={title} onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default BookCreate;
