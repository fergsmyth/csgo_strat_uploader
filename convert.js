const gm = require('gm');
const fs = require('fs');
const path = require('path');

const inputs = './inputs/';
const outputs = './outputs/';

if (!fs.existsSync(outputs)){
	fs.mkdirSync(outputs);
}

fs.readdir(inputs, (err, files) => {
		files.forEach(file => {
				var fileName = path.basename(file, '.tga');
				gm(inputs + file)
				.write(outputs + fileName + '.png', function (err) {
						if (err){ 
						console.log(err);
						} else {
						console.log(fileName);	
						}
						});
				});
		});

