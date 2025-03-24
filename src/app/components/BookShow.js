import React from 'react'

function BookShow({book,onDelete}) {

    const handleClick = () => {
        onDelete(book.id)
    }
  return (
    <div>{book.title}
    <button onClick={handleClick}>Delete  !!</button>
    {/* ตรงนี้แยกไปเขียน handle นอกได้ */}
    </div>
  )
}

export default BookShow