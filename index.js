'use strict';

var Alexa = require('alexa-sdk');
var http = require('http')
var _ = require('lodash');

require('dotenv').config();

var SKILL_NAME = 'invoke pi';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = process.env.APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function() {
        this.emit('AMAZON.HelpIntent');
    },
    'TvPowerIntent': function () {
        try {
            console.log('inside try: ' + process.env.host);
            var powerVal = this.event.request.intent.slots.power.value;
            var header = {'power': powerVal};//pulls variable from intent
            console.log('inside try 2');
            var opt = {
                host: process.env.host,
                path: '/sony-bravia/power',
                method: 'POST',
                headers: header
            };
            console.log('after opt: ' + opt.host);

            var req = http.request(opt, (res) => {
              var data = '';
              console.log(`STATUS: ${res.statusCode}`);
              console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
              res.setEncoding('utf8');
              res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
                data = data + ' ' + chunk;
              });
              res.on('end', () => {
                this.emit(':tellWithCard', 'Status ' + data, "TV Power");
                console.log('No more data in response.');
              });
            });

            console.log('after opt: 1');

            req.on('error', (e) => {
              console.log(`problem with request: ${e.message}`);
              this.emit(':tellWithCard', 'Server Request failed for power ' + e.message,  SKILL_NAME, "TV Power");
            });
 
            console.log('after opt: 2');

            // write data to request body
            req.write('');
            console.log('after opt: 3');
            req.end();
            console.log('after opt: 4');
//            this.emit(':tellWithCard', 'TV turned ' + powerVal,  SKILL_NAME, "TV Power");

        } catch(err) {
            console.log(err.message);
            this.emit(':tellWithCard', 'Could not perform action ' + powerVal, err);
        }
    },
    'TvIncreaseVolumeIntent': function () {
    	try {
            console.log('inside try: ' + process.env.host);
            var changeBy = this.event.request.intent.slots.changeBy.value;
            var header = {'volume': changeBy};//pulls variable from intent
            console.log('inside try 2');
            var opt = {
                host: process.env.host,
                path: '/sony-bravia/increase-volume',
                method: 'POST',
                headers: header
            };
            console.log('after opt: ' + opt.host);

            var req = http.request(opt, (res) => {
              var data = '';
              console.log(`STATUS: ${res.statusCode}`);
              console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
              res.setEncoding('utf8');
              res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
                data = data + ' ' + chunk;
              });
              res.on('end', () => {
                this.emit(':tellWithCard', 'Status ' + data, "TV input");
                console.log('No more data in response.');
              });
            });

            console.log('after opt: 1');

            req.on('error', (e) => {
              console.log(`problem with request: ${e.message}`);
              this.emit(':tellWithCard', 'Server Request failed for power ' + e.message,  SKILL_NAME, "TV volume");
            });
 
            console.log('after opt: 2');

            // write data to request body
            req.write('');
            console.log('after opt: 3');
            req.end();
            console.log('after opt: 4');

        } catch(err) {
            console.log(err.message);
            this.emit(':tellWithCard', 'Could not perform action ' + changeBy, err);
        }
    },
    'TvDecreaseVolumeIntent': function () {
    	try {
            console.log('inside try: ' + process.env.host);
            var changeBy = this.event.request.intent.slots.changeBy.value;
            var header = {'volume': changeBy};//pulls variable from intent
            console.log('inside try 2');
            var opt = {
                host: process.env.host,
                path: '/sony-bravia/decrease-volume',
                method: 'POST',
                headers: header
            };
            console.log('after opt: ' + opt.host);

            var req = http.request(opt, (res) => {
              var data = '';
              console.log(`STATUS: ${res.statusCode}`);
              console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
              res.setEncoding('utf8');
              res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
                data = data + ' ' + chunk;
              });
              res.on('end', () => {
                this.emit(':tellWithCard', 'Status ' + data, "TV input");
                console.log('No more data in response.');
              });
            });

            console.log('after opt: 1');

            req.on('error', (e) => {
              console.log(`problem with request: ${e.message}`);
              this.emit(':tellWithCard', 'Server Request failed for power ' + e.message,  SKILL_NAME, "TV volume");
            });
 
            console.log('after opt: 2');

            // write data to request body
            req.write('');
            console.log('after opt: 3');
            req.end();
            console.log('after opt: 4');

        } catch(err) {
            console.log(err.message);
            this.emit(':tellWithCard', 'Could not perform action ' + changeBy, err);
        }
    },
    'TvInputIntent': function () {
    	try {
            console.log('inside try: ' + process.env.host);
            var input = this.event.request.intent.slots.input.value;
            var header = {'input': input};//pulls variable from intent
            console.log('inside try 2');
            var opt = {
                host: process.env.host,
                path: '/sony-bravia/video-input',
                method: 'POST',
                headers: header
            };
            console.log('after opt: ' + opt.host);

            var req = http.request(opt, (res) => {
              var data = '';
              console.log(`STATUS: ${res.statusCode}`);
              console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
              res.setEncoding('utf8');
              res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
                data = data + ' ' + chunk;
              });
              res.on('end', () => {
                this.emit(':tellWithCard', 'Status ' + data, "TV input");
                console.log('No more data in response.');
              });
            });

            console.log('after opt: 1');

            req.on('error', (e) => {
              console.log(`problem with request: ${e.message}`);
              this.emit(':tellWithCard', 'Server Request failed for power ' + e.message,  SKILL_NAME, "TV input");
            });
 
            console.log('after opt: 2');

            // write data to request body
            req.write('');
            console.log('after opt: 3');
            req.end();
            console.log('after opt: 4');

        } catch(err) {
            console.log(err.message);
            this.emit(':tellWithCard', 'Could not perform action ' + input, err);
        }
    },
    'TvMuteIntent': function () {
    	try {
            console.log('inside try: ' + process.env.host);
            var opt = {
                host: process.env.host,
                path: '/sony-bravia/mute',
                method: 'POST'
            };
            console.log('after opt: ' + opt.host);

            var req = http.request(opt, (res) => {
              var data = '';
              console.log(`STATUS: ${res.statusCode}`);
              console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
              res.setEncoding('utf8');
              res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
                data = data + ' ' + chunk;
              });
              res.on('end', () => {
                this.emit(':tellWithCard', 'Status ' + data, "TV mute");
                console.log('No more data in response.');
              });
            });

            console.log('after opt: 1');

            req.on('error', (e) => {
              console.log(`problem with request: ${e.message}`);
              this.emit(':tellWithCard', 'Server Request failed for mute ' + e.message,  SKILL_NAME, "TV mute");
            });
 
            console.log('after opt: 2');

            // write data to request body
            req.write('');
            console.log('after opt: 3');
            req.end();
            console.log('after opt: 4');

        } catch(err) {
            console.log(err.message);
            this.emit(':tellWithCard', 'Could not perform action ', err);
        }
    },
    'BosePowerIntent': function () {
        try {
            console.log('inside try: ' + process.env.host);
            var powerVal = this.event.request.intent.slots.power.value;
            var header = {'power': powerVal};//pulls variable from intent
            console.log('inside try 2');
            var opt = {
                host: process.env.host,
                path: '/bose/power',
                method: 'POST',
                headers: header
            };
            console.log('after opt: ' + opt.host);

            var req = http.request(opt, (res) => {
              var data = '';
              console.log(`STATUS: ${res.statusCode}`);
              console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
              res.setEncoding('utf8');
              res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
                data = data + ' ' + chunk;
              });
              res.on('end', () => {
                this.emit(':tellWithCard', 'Status ' + data, "Bose Power");
                console.log('No more data in response.');
              });
            });

            console.log('after opt: 1');

            req.on('error', (e) => {
              console.log(`problem with request: ${e.message}`);
              this.emit(':tellWithCard', 'Server Request failed for power ' + e.message,  SKILL_NAME, "Bose Power");
            });
 
            console.log('after opt: 2');

            // write data to request body
            req.write('');
            console.log('after opt: 3');
            req.end();
            console.log('after opt: 4');
//            this.emit(':tellWithCard', 'TV turned ' + powerVal,  SKILL_NAME, "TV Power");

        } catch(err) {
            console.log(err.message);
            this.emit(':tellWithCard', 'Could not perform action ' + powerVal, err);
        }
    },
    'BoseMuteIntent': function () {
    	try {
            console.log('inside try: ' + process.env.host);
            var opt = {
                host: process.env.host,
                path: '/bose/mute',
                method: 'POST'
            };
            console.log('after opt: ' + opt.host);

            var req = http.request(opt, (res) => {
              var data = '';
              console.log(`STATUS: ${res.statusCode}`);
              console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
              res.setEncoding('utf8');
              res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
                data = data + ' ' + chunk;
              });
              res.on('end', () => {
                this.emit(':tellWithCard', 'Status ' + data, "Bose mute");
                console.log('No more data in response.');
              });
            });

            console.log('after opt: 1');

            req.on('error', (e) => {
              console.log(`problem with request: ${e.message}`);
              this.emit(':tellWithCard', 'Server Request failed for mute ' + e.message,  SKILL_NAME, "Bose mute");
            });
 
            console.log('after opt: 2');

            // write data to request body
            req.write('');
            console.log('after opt: 3');
            req.end();
            console.log('after opt: 4');

        } catch(err) {
            console.log(err.message);
            this.emit(':tellWithCard', 'Could not perform action ', err);
        }
    },
    'BoseVolumeIntent': function () {
    	try {
            console.log('inside try: ' + process.env.host);
            var volumeVal = this.event.request.intent.slots.volume.value;
            var header = {'volume': volumeVal};//pulls variable from intent
            console.log('inside try 2');
            var opt = {
                host: process.env.host,
                path: '/bose/set-volume',
                method: 'POST',
                headers: header
            };
            console.log('after opt: ' + opt.host);

            var req = http.request(opt, (res) => {
              var data = '';
              console.log(`STATUS: ${res.statusCode}`);
              console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
              res.setEncoding('utf8');
              res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
                data = data + ' ' + chunk;
              });
              res.on('end', () => {
                this.emit(':tellWithCard', 'Status ' + data, "Bose mute");
                console.log('No more data in response.');
              });
            });

            console.log('after opt: 1');

            req.on('error', (e) => {
              console.log(`problem with request: ${e.message}`);
              this.emit(':tellWithCard', 'Server Request failed for mute ' + e.message,  SKILL_NAME, "Bose mute");
            });
 
            console.log('after opt: 2');

            // write data to request body
            req.write('');
            console.log('after opt: 3');
            req.end();
            console.log('after opt: 4');

        } catch(err) {
            console.log(err.message);
            this.emit(':tellWithCard', 'Could not perform action ', err);
        }
    },
    'BoseSourceIntent': function () {
    	try {
            console.log('inside try: ' + process.env.host);
            var sourceVal = this.event.request.intent.slots.source.value;
            var header = {'source': sourceVal};//pulls variable from intent
            console.log('inside try 2');
            var opt = {
                host: process.env.host,
                path: '/bose/set-source',
                method: 'POST',
                headers: header
            };
            console.log('after opt: ' + opt.host);

            var req = http.request(opt, (res) => {
              var data = '';
              console.log(`STATUS: ${res.statusCode}`);
              console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
              res.setEncoding('utf8');
              res.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
                data = data + ' ' + chunk;
              });
              res.on('end', () => {
                this.emit(':tellWithCard', 'Status ' + data, "Bose source");
                console.log('No more data in response.');
              });
            });

            console.log('after opt: 1');

            req.on('error', (e) => {
              console.log(`problem with request: ${e.message}`);
              this.emit(':tellWithCard', 'Server Request failed for mute ' + e.message,  SKILL_NAME, "Bose mute");
            });
 
            console.log('after opt: 2');

            // write data to request body
            req.write('');
            console.log('after opt: 3');
            req.end();
            console.log('after opt: 4');

        } catch(err) {
            console.log(err.message);
            this.emit(':tellWithCard', 'Could not perform action ', err);
        }
    },
    'EverythingPowerIntent': function () {
    	try {
            console.log('inside try: ' + process.env.host);
            var powerVal = this.event.request.intent.slots.power.value;
            var header = {'power': powerVal};//pulls variable from intent
            var targetItems = [
            		{
            			path: '/sony-bravia/power'
            		},
            		{
            			path: '/bose/power'
            		}
            ];
            var finalData = '';
            var done = _.after(targetItems.length, function(finalData) {
            	console.log('inside ifasdf ' + finalData.trim().replace(/(and)$/, ''));
        		this.emit(':tellWithCard', 'Status ' + finalData.trim().replace(/(and)$/, ''));
            }.bind(this));
            
            _.forEach(targetItems, function(element) {
            	console.log('inside try 2');
                var opt = {
                    host: process.env.host,
                    path: element.path,
                    method: 'POST',
                    headers: header
                };
                var req = http.request(opt, (res) => {
                    var data = '';
                    console.log(`STATUS: ${res.statusCode}`);
                    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
                    res.setEncoding('utf8');
                    res.on('data', (chunk) => {
                      console.log(`BODY: ${chunk}`);
                      data = data + ' ' + chunk;
                    });
                    res.on('end', () => {
                    	finalData = finalData + ' ' + data + ' and ';
                    	done(finalData);
                    	console.log('No more data in response. ' + finalData);
                    });
                  });
//                var req = http.request(opt, (res) => responseHandler(res));
                  console.log('after opt: 1');

                  req.on('error', (e) => {
                    console.log(`problem with request: ${e.message}`);
                    this.emit(':tellWithCard', 'Server Request failed for power ' + e.message,  SKILL_NAME, "TV Power");
                  });
       
                  console.log('after opt: 2');

                  // write data to request body
                  req.write('');
                  console.log('after opt: 3');
                  req.end();
                  console.log('after opt: 4');
            });
        } catch(err) {
            console.log(err.message);
            this.emit(':tellWithCard', 'Could not perform action ' + powerVal, err);
        }
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say Ask Pi to turn on the Tv, or, " +
                           "you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};

//var globalVar = function() {
//	this.finalData = '';
//}.bind(this);
//
//var responseHandlerAll = function(res) {
//	var data = '';
//    console.log(`STATUS: ${res.statusCode}`);
//    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//    res.setEncoding('utf8');
//    res.on('data', (chunk) => {
//      console.log(`BODY: ${chunk}`);
//      data = data + ' ' + chunk;
//    });
//    res.on('end', () => {
//    	this.finalData = this.finalData + ' ' + data + ' and ';
//    	console.log("before if " + targetItems.length + " " + i)
//    	if (i == (targetItems.length - 1)) {
//    		console.log('inside if ' + this.finalData);
//    		this.emit(':tellWithCard', 'Status ' + this.finalData);
//    		console.log('inside if ' + finalData);
//    	}
//    	console.log('No more data in response. ' + this.finalData);
//    });
//}.bind(this);

