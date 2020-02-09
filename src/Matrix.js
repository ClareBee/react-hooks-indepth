import React, { useState } from 'react';
import MATRIX_FRAMES from './data/matrix';
import { useDynamicTransition } from './hooks';

const MINIMUM_DELAY = 10;
const MINIMUM_INCREMENT = 1;
function Matrix(){
  const [ delay, setDelay ] = useState(500);
  const [ increment, setIncrement ] = useState(5);

  const index = useDynamicTransition({increment, delay, length: MATRIX_FRAMES.length})
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
