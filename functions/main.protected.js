const Twilio = require("twilio");

exports.handler = async (context, event, callback) => {
  const twiml = new Twilio.twiml.VoiceResponse();

  const gather = twiml.gather({
    numDigits: 1,
    action: "events/handle-keypress",
    timeout: 3,
  });

  try {
    const jsonData = require("../assets/speech.json");
    gather.say(
      { voice: "Google.fr-FR-Wavenet-A", language: "fr-FR" },
      jsonData.data.to_speech
    );
    twiml.redirect("/retray-message");

    callback(null, twiml);
  } catch (error) {
    console.error(error);
    callback(error);
  }
};
