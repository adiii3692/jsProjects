import React, { useState, useEffect } from "react";
import { PORT } from "../../../backend/config";
import { Link } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton.jsx";
import { useParams } from "react-router-dom";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsprojects-omp6.onrender.com/books/${id}`)
    .then((response)=>setBook(response.data))
    .catch((response)=>console.log(response))
  }, []);

  console.log(book.title);

  return (<div className="p-4">
        <BackButton/>
        <h1 className="text-3xl my-4">Show Book</h1>
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">ID</span>
            <span className="text-xl mr-4 text-gray-500">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span className="text-xl mr-4 text-gray-500">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span className="text-xl mr-4 text-gray-500">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span className="text-xl mr-4 text-gray-500">{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span className="text-xl mr-4 text-gray-500">{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Update Time</span>
            <span className="text-xl mr-4 text-gray-500">{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
    </div>);
};

export default ShowBook;
