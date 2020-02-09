import React, { useEffect, useState } from 'react';

// 2 renders => initial value, resolved value (async fetch result)
export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);
  useEffect(() => {
    fetch(url)
      .then(response => response.json()) // response has meta data, transformed into json which returns a promise
      .then(json => setResult(json));
  }, []); // second argument - variable that governs reren. empty array => don't rerun after rerender
  return result;
}

export const useDynamicTransition = ({ increment, delay, length }) => {
  const [ index, setIndex ] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // index set to 0 by closure from useEffect, so needs another callback to get latest value
      setIndex(
        storedIndex => {
          return (storedIndex+increment)%length
        }
      )
    }, delay);
    // callback => clean up queued interval in case of unmount (cf componentDidUnmount?)
    return () => {
      clearInterval(interval);
    };
  }, [delay, increment]); // rerun when delay changes!
  return index;
}
