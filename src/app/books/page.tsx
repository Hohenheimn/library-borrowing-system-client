import React from "react";


import Book from "./_component/Book";


const BookPage = () => {
  return (
    <section className=" flex flex-col justify-center items-center">
      <h1>Book Management</h1>
      <Book />
    </section>
  );
};

export default BookPage;
