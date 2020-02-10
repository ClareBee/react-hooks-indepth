import React from 'react';
import { useAppContext } from './hooks';
import CreateReaction from './CreateReaction';
import MessageReactions from './MessageReactions';

function MessageBoard(){
  // inner destructuring
  const { state: { messages, reactionsMap } } = useAppContext();
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
          <MessageReactions messageReactions={reactionsMap[id]} />
          <hr />
        </div>
      )
    })}
    </div>
  )
}

export default MessageBoard;
