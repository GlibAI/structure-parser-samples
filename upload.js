var request = require('request');
var fs = require('fs');

var ORG = 'glib';
var ID = '123456';

var base_url = 'http://35.187.158.185:8080/upload';

var url = [base_url, ORG, ID].join('/');

var req = request.post(url, function (err, resp, body) {
    if (err) {
        console.log('Error!');
    } else {
        if (resp.statusCode === 200) {
            console.log('Success: ' + JSON.parse(body).message);
        } else {
            console.log('Error: ' + JSON.parse(body).message);
        }

    }
});

var form = req.form();
form.append('intents', fs.createReadStream('intents.txt.sample'));
form.append('entities', fs.createReadStream('entities.txt.sample'));
form.append('synonyms', fs.createReadStream('synonyms.txt.sample'));