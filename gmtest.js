var gm = require('gm');

gm('de_mirage0000.tga')
.resize(353, 257)
.autoOrient()
.write('de_mirage.png', function (err) {
  if (!err) console.log(' hooray! ');
});
