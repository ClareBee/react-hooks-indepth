import React, { useState, useEffect } from 'react';
import PICTURES from './data/pictures';

const SECONDS = 1000;
const MINIMUM_DELAY = 1000;
const MINIMUM_INCREMENT = 1;

function Gallery(){
  const [ index, setIndex ] = useState(0);
  const [ delay, setDelay ] = useState(3 * SECONDS);
  const [ increment, setIncrement ] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // index set to 0 by closure from useEffect, so needs another callback to get latest value
      setIndex(
        storedIndex => {
          return (storedIndex+increment)%PICTURES.length
        }
      )
    }, delay);
    // callback => clean up queued interval in case of unmount (cf componentDidUnmount?)
    return () => {
      clearInterval(interval);
    };
  }, [delay, increment]); // rerun when delay changes!

  const updateDelay = event => {
    const delay = Number(event.target.value) * SECONDS;
    setDelay(delay < MINIMUM_DELAY ? MINIMUM_DELAY : delay); // convert to milliseconds
  }
  const updateIncrement = event => {
    const increment = Number(event.target.value);
    setIncrement(increment < MINIMUM_INCREMENT ? MINIMUM_INCREMENT : increment);
  }

  return (
    <div className="gallery">
      <img src={PICTURES[index].image} alt="gallery" />
      <div className="multiform">
        <div>
          Gallery transition delay (seconds):
          <input type="number" onChange={updateDelay} />
        </div>
        <div>
          Gallery increment:
          <input type="number" onChange={updateIncrement} />
        </div>
      </div>
    </div>
  )
}
export default Gallery;
