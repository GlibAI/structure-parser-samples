var request = require('request');
var fs = require('fs');

var ORG = 'glib';
var ID = '123456';

var base_url = 'http://35.187.158.185:8080/parse';

var url = [base_url, ORG, ID].join('/');

var config = {};
config.url = url;
config.headers = {'Content-Type': 'application/json'};
config.json = {"query": "i want to eat a burger"};

request.post(config, function (err, resp, body) {
    if (err) {
        console.log('Error!');
    } else {
        if (resp.statusCode === 200) {
            console.log('Query: ', body.query);
            console.log('Intent: ', body.intent);
            console.log('Score: ', body.score);
            console.log('Entities: ', body.context);
        } else {
            console.log('Error: ' + body.message);
        }

    }
});

