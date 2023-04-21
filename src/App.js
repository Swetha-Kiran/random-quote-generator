import React from "react";
import "../styles/App.css";
import { useState,useEffect, } from "react";


const App = () => {
  const [quote,setNewquote]=useState("");
  //console.log(quote);

  const fetchData = async () => {
    const response = await fetch(`https://api.quotable.io/random`);
    const newData = await response.json();
    setNewquote(newData);
};
 

  useEffect(() => {

  fetchData();
    
  },[]);


    return (
      <div id="main">
       
         <div id="wrapper">
          <div className="quote-text">
                {quote.content}
          </div>
         <div className="quote-author">
                {quote.author}
          </div>
          <button id="new-quote" className="button" onClick={fetchData}>New Quote</button>
          </div>      
      </div>
    );
};

export default App;
