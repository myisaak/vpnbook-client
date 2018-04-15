const request = require('request');
const parser = require('cheerio');
const fs = require('fs');
var exec = require("child_process").exec;

request('https://www.vpnbook.com/freevpn', function (error, response, html) {
	if (!error && response.statusCode == 200) {
		const $ = parser.load(html);
		var pass = $('div.one-third:nth-child(3) > ul:nth-child(4) > li:nth-child(10) > strong:nth-child(1)').text();
		console.log(pass,process.cwd());
	
		fs.writeFile("auth.txt", "vpnbook\n"+pass, (err) => {
			if(err){
				return console.log(err);
			}
		});
		cmd = `openvpn --config conf.ovpn`;
		exec(cmd);
	}
	else {
		throw error;
	}
});
