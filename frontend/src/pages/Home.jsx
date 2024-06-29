import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { PORT } from "../../../backend/config.js";
import BookTable from "../components/home/BookTable.jsx";
import BookCard from "../components/home/BookCard.jsx";

const Home = () => {

  //Set state for the books array
  const [books, setBook] = useState([]);

  //How to display books
  const [displayStyle, setDisplay] = useState('table')

  //Connect to the backend using axios and get the data
  useEffect(() => {
    axios
      .get(`http://localhost:${PORT}/books`)
      .then((response) => {
        setBook(response.data.data);
      })
      .catch((response) => console.log(response));
  }, []);

  //Table with all the books output
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=>setDisplay('table')}>Table</button>
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=>setDisplay('card')}>Card</button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to={"/books/create"}>
          <MdOutlineAddBox className="text-sky-800 text-4xl"></MdOutlineAddBox>
        </Link>
      </div>

      {displayStyle==='table'?(<BookTable books={books}/>):(<BookCard books = {books}/>)}
      
    </div>
  );
};
export default Home;
