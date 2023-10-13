const Twilio = require("twilio");

exports.handler = function(context, event, callback) {
    const twiml = new Twilio.twiml.VoiceResponse();
  
    const gather = twiml.gather({
      numDigits: 1,
      action: "events/handle-keypress",
       timeout: 4,
    });
  
   gather.say({ voice: 'Google.fr-FR-Wavenet-A' ,language: 'fr-FR'}, 
    "Nous n'avons pas compris votre demande. Tapez 1. Si vous souhaitez diminuer votre facture d'électricité. Tapez 2. Si vous souhaitez continuer de payer toutes vos factures au prix actuel.");
  
    return callback(null, twiml);
  };