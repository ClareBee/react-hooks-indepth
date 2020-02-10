import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from './state/reducer';
import { newMessage } from './state/actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Reaction</h1>
    </div>
  );
}

export default App;
