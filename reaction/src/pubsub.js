import PubNub from 'pubnub';
import pubNubConfig from './pubnub.config';


export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

function PubSub(){
  const pubNub = new PubNub(pubNubConfig);
  pubNub.subscribe({ channels: [MESSAGE_CHANNEL] });
  this.addListener = listenerConfig => {
    pubNub.addListener(listenerConfig);
  }

  this.publish = message => {
    console.log('publishing', message)
    pubNub.publish({ message, channel: MESSAGE_CHANNEL })
  }
}

export default PubSub;
