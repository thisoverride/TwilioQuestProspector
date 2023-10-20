const Twilio = require("twilio");

exports.handler = function(context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();

  const gather = twiml.gather({
    numDigits: 1,
    action: "/handle-keypress",
    timeout: 3,
  });

 gather.say({ voice: 'Google.fr-FR-Wavenet-A' ,language: 'fr-FR'}, 
  "Bonjour, ne raccrochez pas, message destiné à tous les particuliers. suite à l'augmentation des factures    d'électricité, vous allez être mis en relation avec un service spécialisé dans l'économie d'énergie. tapez 1, si vous  souhaitez diminuer votre facture d'électricité. tapez 2, si vous souhaitez continuer de payer toutes vos factures au prix actuel. Ces hausses significatives ont un impact direct sur votre budget mensuel, et il est temps que vous recherchiez des moyens de réduire vos dépenses auprès des fournisseurs traditionnels d'électricité, en prenant le contrôle de vos factures. tapez 1, si vous souhaitez diminuer votre facture d'électricité. tapez 2, si vous souhaitez continuer de payer toutes vos factures au prix actuel.");

  return callback(null, twiml);
};