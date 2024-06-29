import React from "react";
import BookSingleCard from "./BookSingleCard.jsx";

const BookCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookSingleCard book={book} key={book._id}></BookSingleCard>
      ))}
    </div>
  );
};

export default BookCard;
