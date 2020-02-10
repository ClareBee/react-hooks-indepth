import React, { useReducer } from 'react';
import reducer, { initialState } from '../state/reducer';
import Context from '../context';

import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log('state', state)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <h1>Reaction</h1>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
