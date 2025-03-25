"use client";
import App from "./components/App";
import React from "react";
import BooksContext from "./Context/Books";

function Home() {
  return (
    <BooksContext.Provider value={5}>
      <App />
    </BooksContext.Provider>
  );
}

export default Home;
