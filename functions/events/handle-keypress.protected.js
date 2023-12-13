const moment = require('moment-timezone');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATA_URI;

exports.handler = async (context, event, callback) => {
  const twiml = new Twilio.twiml.VoiceResponse();
  const selectedOption = event.Digits;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  const handleTape = async (tackProspect) => {
    try {
      await client.connect();
      const collection = client.db('IVR-track').collection('log_calls');
      await collection.insertOne(tackProspect);
    } catch (error) {
      const collection = client.db('IVR-track').collection('log_calls_error');
      await collection.insertOne({error: error.message ,...tackProspect});
    }
  };

  const trackProspect = {
    callSid: event.CallSid,
    called: event.Called,
    digits: event.Digits === 'A' ? '2': event.Digits ,
    calledBy: event.From,
    callTime : moment().tz('Europe/Paris').format('YYYY-MM-DD HH:mm:ss')
  };
  
  
  await handleTape(trackProspect);
  switch (selectedOption) {
    case '1':
      twiml.dial({ callerId: event.From }, process.env.CALL_CENTER);
      break;
    case 'A':
      twiml.hangup();
      break;
    case '2':
      twiml.hangup();
      break;
    default:
      twiml.redirect('/retray-menu');
      break;
  }

  return callback(null, twiml);
};
