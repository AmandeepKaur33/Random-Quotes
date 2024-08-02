import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';
import axios from 'axios';
import Header from './Components/Header';
import QuotesCard from './Components/Quote Cards';
import { Route, Routes } from 'react-router-dom';
import QuotesList from './Components/Quote List';

function App() {
  const [quote, setQuote] = useState();
  const [saveQuote, setSaveQuote] = useState([]);
  const fetchQuote = async () => {
        try {
          const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
          setQuote(response.data[0])
        } catch (error) {
          console.error('Error fetching quote:', error);
        }
      };
      const handleSave = (quote) => {
            setSaveQuote([...saveQuote, {id: uuidv4(), quote: quote}]);
           setQuote(); 
          };
          const handleUnsave = (removeId) => {
            console.log(removeId);
            const newSavedQuotes = saveQuote?.filter(item=> item?.id !== removeId)
            setSaveQuote(newSavedQuotes)
          }
  return (
   <div className='w-full bg-blue-50 py-2 sm:py-5 flex flex-col items-center'>
     <Header/>
     <Routes>
        <Route name="Home" element={<QuotesCard fetchQuote={fetchQuote} quote={quote} handleSave={handleSave} />} path="/" />
        <Route name="SavedQuotes" element={<QuotesList saveQuote={saveQuote} handleUnsave={handleUnsave} />} path="/SavedQuotes"></Route>
        </Routes>
     {/* <QuotesCard fetchQuote={fetchQuote} quote={quote} handleSave={handleSave} /> */}
   </div>
  );
}

export default App;
