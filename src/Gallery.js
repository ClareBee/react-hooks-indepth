import React, { useState, useEffect } from 'react';
import PICTURES from './data/pictures';

function Gallery(){
  const [ index, setIndex ] = useState(0);
  useEffect(() => {
    setInterval(() => {
      // index set to 0 by closure from useEffect, so needs another callback to get latest value
      setIndex(
        storedIndex => {
          return (storedIndex+1)%PICTURES.length
        }
      )
    }, 3000);
  }, []);

  return (
    <div className="gallery">
      <img src={PICTURES[index].image} alt="gallery" />
    </div>
  )
}
export default Gallery;
