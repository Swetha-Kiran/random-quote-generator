import React from "react";
import "./App.css";
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
       <div class="card-header">
      Inspiring Quotes!!
  </div>
  <div class="card-body">
      <p class="card-text"> {quote.content}</p>
    <h5 class="card-title"> {quote.author}</h5>
    <button type="button" class="btn btn-success" onClick={fetchData}>Generate New Quote</button>
  </div>
 


</div>
          
               
 
    );
};

export default App;
