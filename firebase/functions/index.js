'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug:true});

app.intent('favorite color',(conv,{color}) => {
	const lucknumber = color.length;
  	//Respond the user's lucky number and end the conversation
  	
  	conv.close("your lucky number is "+ lucknumber);
  
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
