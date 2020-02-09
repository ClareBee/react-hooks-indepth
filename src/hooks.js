import React, { useEffect, useState } from 'react';

// 2 renders => initial value, resolved value (async fetch result)
const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);
  useEffect(() => {
    fetch(url)
      .then(response => response.json()) // response has meta data, transformed into json which returns a promise
      .then(json => setResult(json));
  }, []); // second argument - variable that governs reren. empty array => don't rerun after rerender
  return result;
}

export default useFetch
