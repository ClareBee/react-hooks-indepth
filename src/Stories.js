import React, { useEffect, useState } from 'react';

function Stories(){
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const url = `https://news-proxy-server.appspot.com/topstories`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setStories(data)
      })
  }, []);


  const renderStories = () => stories.map(story => {
    const { id, score, by, title, url, time } = story;
    return (
      <li key={id}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <p>{title}<span> - By: {by}</span><span> - <em>{new Date(time * 1000).toLocaleString()}</em></span></p>
          <p>{score} upvotes</p>
        </a>
      </li>
    )
  })
  return (
    <ul>{renderStories()}</ul>
  )

}

export default Stories;
