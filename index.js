/**
 * Alexa Ask Arnold Skill
 * https://github.com/radiantnode/alexa-ask-arnold
 */

'use strict';

var AlexaSkill = require('./lib/AlexaSkill');
var sounds = require('./lib/sounds');

var AlexaAskArnoldSkill = function () {
  AlexaSkill.call(this, config.app_id);
};

console.log(sounds.MISC[6][0])

AlexaAskArnoldSkill.prototype = Object.create(AlexaSkill.prototype);
AlexaAskArnoldSkill.prototype.constructor = AlexaAskArnoldSkill;

// Event handlers
// AlexaAskArnoldSkill.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {};
// AlexaAskArnoldSkill.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {};

AlexaAskArnoldSkill.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
  response.tell('Welcome to Ask Arnold!');
};

AlexaAskArnoldSkill.prototype.intentHandlers = {
  SayHelloIntent: function (intent, session, response) {
    var picked = pickRandom(sounds.GREETINGS);
    response.tell('<audio src="' + picked[0] + '" />');
  },

  GetToTheChoppahIntent: function (intent, session, response) {
    response.tell('<audio src="' + sounds.CHOPPAH + '" />');
  },

  WhoAmIIntent: function (intent, session, response) {
    response.tell('<audio src="' + sounds.MISC[6][0] + '" />');
  },

  'AMAZON.HelpIntent': function (intent, session, response) {
    response.ask('I am some help text', 'I am the reprompt text');
  },

  'AMAZON.StopIntent': function (intent, session, response) {
    response.tell('Alright alright... Bye!');
  }

};

function pickRandom (list) {
  return list[Math.floor(Math.random()*list.length)]
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
  var skill = new AlexaAskArnoldSkill();
  skill.execute(event, context);
};