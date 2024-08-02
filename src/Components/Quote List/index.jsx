import React from 'react';
import { FaBookmark } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { IoArrowBack } from "react-icons/io5";
import {useNavigate} from 'react-router-dom';

const QuotesList = ({ saveQuote, handleUnsave }) => {
  const navigate = useNavigate();
  return (
    <div className='w-full sm:w-11/12 pb-10 h-[90vh] sm:h-[80vh]  bg-pink-200 my-2 overflow-auto scrollbar-track-gray-100  rounded-3xl flex  flex-col gap-14'>
      <h1 className='text-3xl sm:text-4xl font-semibold bg-emerald-200 w-2/3 sm:w-1/3 h-48 sm:h-44 rounded-ee-full flex items-center pl-10'>YOUR QUOTES</h1>
      {saveQuote.length
      ?
      <ul className='flex flex-col items-center w-full gap-6 '>
      {saveQuote?.map((item)=>(
        <li key={item?.id} className='bg-pink-50 w-2/3 p-4 shadow-xl h-[25vh] sm:h-[30vh] flex justify-between sm:even:mr-64 sm:odd:ml-64 flex-col'>
          <h1 className='flex gap-2 text-emerald-700 text-xl' id='quote'>
            <span className='text-pink-500'><FaQuoteLeft/></span>
              {item?.quote}
            <span className='flex items-end text-pink-500'><FaQuoteRight/></span>
          </h1>
          <div className=' w-full  mt-5 text-xl font-medium flex justify-end '>
            <button onClick={()=>handleUnsave(item?.id)}  className='flex items-center gap-1 border border-yellow-500 py-1 px-4 rounded-2xl'>
            Unsave 
            <FaBookmark className='text-yellow-400 font-bold'/>
            </button>
          </div>
        </li>
      ))}
      </ul>
      :
      <div className='w-full h-[calc(100%-112px)] flex items-center flex-col gap-2 justify-center text-5xl'>
        No Saved Quotes
        <div className='  mt-5 text-3xl font-medium flex  '>
            <button onClick={()=>navigate(-1)} className='flex items-center gap-1 border border-emerald-500 text-emerald-500 py-1 px-4 rounded-2xl'>
            Add New 
            <IoArrowBack className='text-emerald-400 font-bold'/>
            </button>
          </div>
      </div>
    }
    </div>
  )
}

export default QuotesList