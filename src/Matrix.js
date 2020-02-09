import React, { useEffect, useState } from 'react';
import MATRIX_FRAMES from './data/matrix';

const MINIMUM_DELAY = 10;
const MINIMUM_INCREMENT = 1;
function Matrix(){
  const [ index, setIndex ] = useState(0);
  const [ delay, setDelay ] = useState(500);
  const [ increment, setIncrement ] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(storedIndex => { // storedIndex from React Engine
        return (storedIndex+increment)%MATRIX_FRAMES.length;
      })
    }, delay)
    return () => clearInterval(interval);
  }, [delay, increment])

  const updateDelay = event => {
    const delay = Number(event.target.value)
    setDelay(delay < MINIMUM_DELAY ? MINIMUM_DELAY : delay);
  }

  const updateIncrement = event => {
    const increment = Number(event.target.value)
    setIncrement(increment < MINIMUM_INCREMENT ? MINIMUM_INCREMENT : increment)
  }

  return (
    <div className="matrix">
    <img src={MATRIX_FRAMES[index]} alt="matrix"/>
    <div className="multiform">
      <div>
        Delay:
        <input onChange={updateDelay} type="number" />
      </div>
      <div>
        Increment:
        <input onChange={updateIncrement} type="number" />
      </div>
    </div>
    </div>
  )
}

export default Matrix;
