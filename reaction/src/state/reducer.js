import { NEW_MESSAGE, SET_USERNAME, REACTION_OBJECTS } from './types';

const REACTION_TYPES = REACTION_OBJECTS.map(obj => obj.type);

export const initialState = {
  reactionsMap: {},
  messages: [],
  username: 'anonymous'
}

const reducer = (state, action ) => {
  if (REACTION_TYPES.includes(action.type)){
    let reactionsMap;
    const { messageId } = action.item;
    const messageReactions = state.reactionsMap[messageId];
    if (messageReactions) {
      reactionsMap = {
        ...state.reactionsMap,
        [messageId]: [...messageReactions, action.item]

      }
    } else {
      reactionsMap = {
        ...state.reactionsMap,
        [messageId]: [action.item]
      }
    }

    return {
      ...state,
      reactionsMap
    }
  }
  switch(action.type){
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.item]
      }
    case SET_USERNAME:
      return {
        ...state,
        username: action.username
      }
    case REACT
    default:
      return state
  }
}

export default reducer;
