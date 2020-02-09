import React, { useEffect, useState } from 'react';
import useFetch from './hooks';

function Stories(){
  const stories = useFetch(`https://news-proxy-server.appspot.com/topstories`, []);
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
