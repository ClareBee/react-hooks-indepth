import React from 'react';
import { useAppContext } from './hooks';
import CreateReaction from './CreateReaction';

function MessageBoard(){
  // inner destructuring
  const { state: { messages } } = useAppContext();
  return(
    <div>
    {messages.map(message => {
      const { id, timestamp, text, username } = message;
      return (
        <div key={id}>
          <h4>{new Date(timestamp).toLocaleString()}</h4>
          <p>{text}</p>
          <h4>- {username}</h4>
          <CreateReaction messageId={id}/>
          <hr />
        </div>
      )
    })}
    </div>
  )
}

export default MessageBoard;
