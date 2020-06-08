const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
 
module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    mozjpeg: {
        quality: 70,
      },
      optipng: {
        optimizationLevel: 3,
      },
  }],
 
  // your other plugins here
 
]);