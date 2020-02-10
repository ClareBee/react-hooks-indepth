import { NEW_MESSAGE } from './types';
import uuid from 'uuid/v4'

// action creators = fn that create actions, no need to hardcode object in every dispatch
export const newMessage = text => ({
    type: NEW_MESSAGE,
    item: { id: uuid(), text, timestamp: Date.now() }
})
