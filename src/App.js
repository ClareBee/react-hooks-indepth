import React, { useState } from 'react';
import Joke from './Joke';
import Stories from './Stories';
import Tasks from './Tasks';
import Gallery from './Gallery';

function App() {
  const [userQuery, setUserQuery] = useState('');

  const updateUserQuery = e => {
    e.preventDefault();
    // async & not blocking so console log runs before it's finished - hence console log always one step 'behind'
    // React Engine keeps track internally - updates when setUserQuery ends: state variable has changed, prompts rerender
    setUserQuery(e.target.value);
    console.log(e.target.value)

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
      <Tasks />
      <hr />
      <Gallery />
      <hr />
      <Stories />
    </div>
  );
}

export default App;
