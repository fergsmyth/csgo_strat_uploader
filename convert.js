const gm = require('gm');
const fs = require('fs');
const path = require('path');
const winston = require('winston');
const GIFEncoder = require('gifencoder');

const inputs = './inputs/';
const outputs = './outputs/';
const log = './logs/conversion.log';
winston.add(winston.transports.File, { filename: log });

if (!fs.existsSync(outputs)){
	fs.mkdirSync(outputs);
}

const inputFiles = fs.readdirSync(inputs);

inputFiles.forEach(file => {
		winston.log("info", "Converting " + file + " to png.");
		var fileName = path.basename(file, '.tga');
		gm(inputs + file)
		.write(outputs + fileName + '.png', function (err) {
				if (err){	
				winston.log('error', fileName + " conversion failed");
				winston.log('error', err);	
				} 
				else {winston.log('info', fileName + " conversion complete."); }
				});
		});

const encoder = new GIFEncoder();
encoder.setRepeat(0);
encoder.setDelay(1200);
encoder.start();

fs.readdir(outputs, (err, files) => {
		files.forEach(file => {

				});
		});
