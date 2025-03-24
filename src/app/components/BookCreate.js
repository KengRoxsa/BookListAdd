"use client";
import React, { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle(""); // ล้างค่า input หลังจาก submit
  };

  return (
    <>
      <h1>BookCreate</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default BookCreate;
