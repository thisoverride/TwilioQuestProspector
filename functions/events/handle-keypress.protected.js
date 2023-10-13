exports.handler = async(context, event, callback) =>{

    const twiml = new Twilio.twiml.VoiceResponse();
    const selectedOption = event.Digits; 

    switch (selectedOption) {
      case '1':
         twiml.dial({ callerId: event.From }, process.env.CALL_CENTER);
        break;
      case '2':
        twiml.hangup()
        break;
      default:
      twiml.redirect('/retray-menu');
        break;
    }
  
    return callback(null, twiml);
  };