const request = require('request');
const parser = require('cheerio');
const fs = require('fs');
var spawn = require("child_process").spawn;
const base = 'https://www.vpnbook.com/';
const ocrBase = 'https://api.ocr.space/parse/imageurl?apikey=helloworld&url=';
const authFile = 'auth.txt';

const vpnStart = () => {
	proc = spawn('openvpn', ['--config', 'conf.ovpn']);

	proc.stdout.on('data', function (data) {
	  console.log('ERR: ' + data.toString());
	});

	proc.stderr.on('data', function (data) {
	  console.log('ERR: ' + data.toString());
	});

	proc.on('exit', function (code) {
	  console.log('openvpn exited (' + code.toString() + ')');
	});
};

fs.stat(authFile, function (err, stats) {
	if (!err &&( Date.now() - fs.statSync(authFile).mtimeMs)/1000/60/60/24 < 1) {
		console.log('password cached');
		vpnStart();
	} else {
		request(base+'freevpn', function (error, response, html) {
			if (!error && response.statusCode == 200) {
				const $ = parser.load(html);

				const passUrl = base+$('div.one-third:nth-child(3) > ul:nth-child(4) > li:nth-child(11) > img:nth-child(1)').attr('src');

				request(ocrBase+passUrl, function(err, res, data) {
					if (!error && response.statusCode == 200) {
						const OCRData = JSON.parse(data);
						if (typeof OCRData === 'object' && !OCRData.IsErroredOnProcessing && OCRData.ParsedResults.length) {
							const pass = OCRData.ParsedResults[0].ParsedText.trim();
							console.log(pass, process.cwd());
							fs.writeFile(authFile, 'vpnbook\n'+pass, (err) => {
								if(err) {
									return console.log(err);
								}
							});
							vpnStart();
						} else {
							console.log('error fetching password', OCRData);
						}
					} else {
						throw error;
					}
				})
			} else {
				throw error;
			}
		});
	}
});
