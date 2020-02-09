import React, { useState, useEffect } from 'react';
import PICTURES from './data/pictures';

function Gallery(){
  const [ index, setIndex ] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // index set to 0 by closure from useEffect, so needs another callback to get latest value
      setIndex(
        storedIndex => {
          return (storedIndex+1)%PICTURES.length
        }
      )
    }, 3000);
    // callback => clean up queued interval in case of unmount (cf componentDidUnmount?)
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="gallery">
      <img src={PICTURES[index].image} alt="gallery" />
    </div>
  )
}
export default Gallery;
