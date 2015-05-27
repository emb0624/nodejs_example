var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World')
});

var server = app.listen(3000, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('\n(~) Example app listening at http://%s:%s', host, port);

	writeJsonToFile();
	readJsonFromFile();
});

var writeJsonToFile = function() {
	var myData = {
		name: 'test',
		version: '1.0'
	};

	var outputFilename = 'data.json';

	fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
		if(err) {
			console.error(err);
		} else {
			console.log('JSON saved to ' + outputFilename);
		}
	});
};

var readJsonFromFile = function() {
	var inputFilename = 'data2.json';

	fs.readFile('data2.json', 'utf8', function (err, data) {
		if (err) {
			console.error(err);
		} else {
	  		console.log('JSON read from ' + inputFilename, JSON.parse(data));
	  	}
	});
};