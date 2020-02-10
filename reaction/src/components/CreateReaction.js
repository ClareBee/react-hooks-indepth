import React from 'react';
import { useAppContext } from './hooks';
import { REACTION_OBJECTS } from '../state/types';
import { createReaction } from '../state/actions';

function CreateReaction({ messageId }){
  const { state: { username },pubsub: { publish} } = useAppContext();
  const publishReaction = ({ type, emoji }) => () => {
    publish(createReaction({ type, emoji, username, messageId }));
  }
  return (
    <div className="create-reaction">
      {
        REACTION_OBJECTS.map(obj => {
          const { type, emoji } = obj;
          return (
            <span key={type} onClick={publishReaction({ type, emoji })}>
              {emoji}
            </span>
          )
        })
      }
    </div>
  )
}

export default CreateReaction;
