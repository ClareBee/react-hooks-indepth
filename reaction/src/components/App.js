import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from '../state/reducer';
import PubSub from '../pubsub';
import Context from '../context';

import SetUsername from './SetUsername';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';

const pubsub = new PubSub(); // new is what provides the 'this'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    pubsub.addListener({message: messageObject => {
      const { channel, message } = messageObject;
      console.log('msg', message, 'channel', channel)
      dispatch(message, )
    }});
  }, []);

  console.log('state', state)
  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <h1>Reaction</h1>

      <SetUsername />
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
