import React, {useState, useEffect} from 'react'
import { PORT } from '../../../backend/config.js'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import BackButton from '../components/BackButton.jsx'

const DeleteBook = () => {

  const [book,setBook] = useState();
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`https://jsprojects-omp6.onrender.com/books/${id}`)
    .then(response=>setBook(response.data))
    .catch(response=>console.log(response))
  },[]);

  const removeBook = () =>{
    axios.delete(`https://jsprojects-omp6.onrender.com/books/${id}`)
    .then(()=>{
      console.log('Book deleted');
      navigate('/');
    })
    .catch(response=>console.log(response))
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl mx-auto p-8'>
        <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full rounded-xl' onClick={removeBook}>Confirm Delete</button>
      </div>
    </div>
  )
}

export default DeleteBook
