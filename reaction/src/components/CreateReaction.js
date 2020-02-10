import React from 'react';

import { REACTION_OBJECTS } from '../state/types';

function CreateReaction(){
  return (
    <div className="create-reaction">
      {
        REACTION_OBJECTS.map(obj => {
          const { type, emoji } = obj;
          return (
            <span key={type}>{emoji}</span>
          )
        })
      }
    </div>
  )
}

export default CreateReaction;
