/**
 * System configuration; 
 */

(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      app: 'lib',
    },
    packages: {
      app: {
        main: './index.js',
        defaultExtension: 'js'
      },
    }
  });
})(this);
