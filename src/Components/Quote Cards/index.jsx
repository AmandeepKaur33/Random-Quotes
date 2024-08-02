import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import '../../App.css';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const QuotesCard = ({ fetchQuote, quote, handleSave }) => {
  return (
    <div className="w-full sm:w-11/12 rounded-3xl h-[90vh] overflow-auto sm:h-[80vh] bg-emerald-200  sm:mt-2 sm:p-6 flex flex-col pt-16 gap-6 text-center items-center justify-start">
      <h1 className='text-2xl sm:text-6xl font-bold ' id='heading'>Welcome To Quotes World</h1>
      <p className='px-1 sm:px-20 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus alias, natus eos dolor veritatis quo eum reprehenderit neque magni eius fugiat! Illum dolor in modi nihil quis rem, officiis asperiores nulla iure sapiente commodi eos?</p>
       <div onClick={fetchQuote} className='flex items-center gap-2 border border-pink-500 text-pink-500 py-1 px-3 w-36 rounded-3xl'>
            <h1>Add Quote</h1>
            <MdAddCircleOutline className='text-2xl font-bold '/>
        </div>
        {quote 
        ?
        <div className='mt-10 bg-emerald-100 shadow-xl w-4/6 p-4 '>
          <h1 className='flex gap-2 text-emerald-700 text-xl' id='quote'>
            <span className='text-pink-500'><FaQuoteLeft/></span>
              {quote}
            <span className='flex items-end text-pink-500'><FaQuoteRight/></span>
          </h1>
          <div className=' w-full  mt-5 text-xl font-medium flex justify-end cursor-pointer '>
            <button onClick={()=>handleSave(quote)} className='flex items-center gap-1 border border-yellow-500 py-1 px-4 rounded-2xl'>
            Save 
            <CiBookmark className='text-yellow-400 font-bold'/>
            </button>
          </div>
        </div>
        :
        ""
      }
    </div>
  )
}

export default QuotesCard