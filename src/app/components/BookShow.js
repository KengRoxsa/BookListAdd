"use client";
import { useState } from "react";
import React from 'react'
import BookEdit from "./BookEdit";

function BookShow({book,onDelete,onEdit}) {
  
    const [showEdit, setShowEdit] = useState(false);

    const handleClick = () => {
        onDelete(book.id)
    }
    const handleSubmit = (id,title) => {
      onEdit(id,title);
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
    <div>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="" />
      <div>{content}</div>
      {/* {showEdit === true ? <BookEdit /> : <h3>{book.title}</h3>} */}
    <button onClick={handleEdit}>Edit</button>
    <button onClick={handleClick}>Delete</button>
    {/* ตรงนี้แยกไปเขียน handle นอกได้ */}
    </div>
  )
}

export default BookShow