import React, { useState } from 'react'
import BackButton from '../components/BackButton.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PORT } from '../../../backend/config.js';

const CreateBook = () => {

  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState(0);
  
  // Used to navigate back to the homepage after creating a book
  const navigate = useNavigate();

  const saveBook = ()=>{
    const data = {
      title: title,
      author: author,
      publishYear: publishYear
    };

    axios.post(`http://localhost:${PORT}/books`,data)
    .then(()=>navigate('/'))
    .catch(response=>console.log(response))
  };
  return (
    <div className='p-4'>
      <BackButton></BackButton>
      <h1 className='text-3xl my-4'>Create Book</h1>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input type='text' value={title} onChange={e=>setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input type='text' value={author} onChange={e=>setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input type='text' value={publishYear} onChange={e=>setPublishYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={saveBook}>Create</button>
      </div>
    </div>
  )
}

export default CreateBook
