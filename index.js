var im = require('imagemagick');
im.identify('1.png', function(err, features){
  if (err) throw err;
    console.log(features);
      // { format: 'JPEG', width: 3904, height: 2622, depth: 8 }
      });
