'use strict';

module.exports = {
  files : {
    javascripts: {
      joinTo: {
        'scripts/app.js': /^app\/scripts/,
        'scripts/vendor.js': /^node_modules/
      }
    },
    stylesheets: {
      joinTo: "styles/app.css"
    }
    // templates: {
    //   joinTo: "scripts/app.js"
    // }
  },

// exports.conventions = {
//   // This option sets where we should place non-css and non-js assets in.
//   // By default, we set this to "/assets/static". Files in this directory
//   // will be copied to `paths.public`, which is "priv/static" by default.
//   assets: /^(static)/
// };
//
// exports.modules = {
//   autoRequire: {
//     "js/app.js": ["js/app"]
//   }
// };

// Phoenix paths configuration
  paths : {
    // Dependencies and current project directories to watch
    watched: ["app"],
    // Where to compile files to
    public: "dist"
  },

  // Plugins configuration
  plugins : {
    babel: {
      // Do not use ES6 compiler in vendor code
      presets: ['env'],
      ignore: [/^(node_modules|vendor)/],
      pattern: /\.js$/
    },
    sass: {
      mode: 'native',
      options: {
        includePaths: ["node_modules/bootstrap/scss"], // Tell sass-brunch where to look for files to @import
        precision: 8 // Minimum precision required by bootstrap-sass
      }
    },
    postcss: {
      processors: [
        require('autoprefixer')(['> 1%', 'last 2 versions']),
        require('cssnano')({
            preset: 'default',
        }),
      ]
    },
    autoReload: {
      enabled: true
    }
  },

  // Globals configuration
  npm : {
    enabled: true,
    globals: {
      $: 'jquery',
      jQuery: 'jquery',
      Tether: 'tether',
      Popper: 'popper.js',
      bootstrap: 'bootstrap'
    }
  }
}
