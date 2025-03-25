"use client";
import App from "./components/App";
import React from "react";
import { BooksProvider} from "./Context/Books";

function Home() {
  return (
    <BooksProvider >
      <App />
    </BooksProvider>
  );
}

export default Home;
