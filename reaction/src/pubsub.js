import PubNub from 'pubnub';
import pubNubConfig from './pubnub.config';

const pubNub = new PubNub(pubNubConfig);

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

pubNub.subscribe({ channels: [MESSAGE_CHANNEL] });

pubNub.addListener({
  message: messageObject => {
    console.log('msg', messageObject)
  }
});

// forces order re: async fns
setTimeout(() => {
  // first call creates the channel in the cloud
  pubNub.publish({
    message: 'foo',
    channel: MESSAGE_CHANNEL
  })
}, 1000);
