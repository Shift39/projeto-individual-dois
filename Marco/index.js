var twilio = require('twilio');


var client = new twilio('AC1ccce9715f2886c2e80b664720ddd672', '9ee1d6780cadbadfc6931e8ef1ca7d0c');


client.messages.create({
  to: '+5511986823796',
  from: '+15044144347',
  body: 'Hello from Twilio!'
});

