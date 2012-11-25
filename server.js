var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res) {

	var urlPath = url.parse(req.url).pathname;
	if (/\/$/.test(urlPath)) {
		urlPath += "index.html";
	}
	var filePath = __dirname + urlPath;
	var file = fs.createReadStream(filePath);

	file.pipe(res);

	file.on('error', function(exception) {
		console.log("Cannot open file at " + exception.path);
	});
});

server.listen(1234);
console.log("Listening on http://127.0.0.1:1234");