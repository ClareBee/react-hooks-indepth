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
    const {id, score, by, title} = story;
    return (
      <li key={id}><p>{title}<span> - By: {by}</span></p><p>{score} upvotes</p></li>
    )
  })
  return (
    <ul>{renderStories()}</ul>
  )

}

export default Stories;
