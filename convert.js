var im = require('imagemagick');
im.convert(['1.png', '1.jpg'], 
function(err, stdout){
  if (err) throw err;
  console.log('stdout:', stdout);
});
