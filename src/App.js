import React, { useState } from 'react';
import Joke from './Joke';
import Stories from './Stories';

function App() {
  const [userQuery, setUserQuery] = useState('');

  const updateUserQuery = e => {
    console.log(e.target.value)
    e.preventDefault();
    setUserQuery(e.target.value);
  }

  const handleKeyPress = e => {
    if(e.key === 'Enter'){
      searchQuery();
    }
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank', 'noopener');
  }

  return (
    <div className="App">
      <h1>App</h1>
      <form className="form">
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress}/>
        <button onClick={searchQuery} type="submit">Search</button>
      </form>
      <hr />
      <Joke />
      <hr />
      <Stories />
    </div>
  );
}

export default App;
