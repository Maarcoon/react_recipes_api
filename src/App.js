import React, { useEffect } from 'react';
import './App.css';

function App() {
  const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
  const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    // Promise with fetch/then
    // fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    // Promise with await
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
