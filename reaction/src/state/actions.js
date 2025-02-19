import { NEW_MESSAGE, SET_USERNAME } from './types';
import uuid from 'uuid/v4'

// action creators = fn that create actions, no need to hardcode object in every dispatch
export const newMessage = ({ text, username }) => ({
    type: NEW_MESSAGE,
    item: { id: uuid(), text, username, timestamp: Date.now() }
})


export const setUsername = username => ({
  type: SET_USERNAME,
  username
})


export const createReaction = ({ type, username, emoji, messageId }) => ({
  type,
  item: {
    id: uuid(),
    username,
    emoji,
    messageId,
    timestamp: Date.now()
  }
})
