import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PORT } from "../../../backend/config.js";
import BackButton from "../components/BackButton.jsx";
import { useNavigate } from "react-router-dom";

const UpdateBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:${PORT}/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((response) => console.log(response));
  }, []);

  const update = () => {
    const data = {
      title: title,
      author: author,
      publishYear: publishYear,
    };

    axios
      .put(`http://localhost:${PORT}/books/${id}`, data)
      .then(() => {
        console.log("Book has been updated");
        navigate("/");
      })
      .catch((response) => console.log(response));
  };

  return (
    <div className="p-4">
      <BackButton></BackButton>
      <h1 className="text-3xl my-4">Update Book</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            placeholder={book.title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            placeholder={book.author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            placeholder={book.publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={update}>
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateBook;
