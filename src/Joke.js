import React, { useEffect, useState } from 'react';

function Joke(){
  const [joke, setJoke] = useState({});
  // callback fn fires after every render cf componentDidMount & componentDidUpdate
  useEffect(() => {
    const url = `https://official-joke-api.appspot.com/jokes/random`
    fetch(url)
      .then(response => response.json()) // response has meta data, transformed into json which returns a promise
      .then(json => {
        console.log(json)
        setJoke(json);
      });
  }, []); // second argument - variable that governs reren. empty array => don't rerun after rerender
  const { setup, punchline } = joke;
  return (
    <div>
      <h3>Joke</h3>
      <p>{setup}</p>
      <p><em>{punchline}</em></p>
    </div>
  )
}

export default Joke;
