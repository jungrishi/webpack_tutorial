// node js property
//imports th path 
const path =  require('path');//for absolute path reference
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// object
const config = {
        
    // defines the entrypoint property 
        entry: './src/index.js',

    // object to where to stack and name the output file
        output: {
            //reference to the directive we want to save the bundle.js to
            path: path.resolve(__dirname,'build'),//absolute path
            filename: 'bundle.js',
            publicPath: 'build/'
        },
        module: {
          rules: [
              {    //converts ES2015/16/17.. to Es5  
                  //test allows babel applied only to .js files
                  test: /\.m?js$/, //regex expression
                  use: {
                      loader: 'babel-loader'
                  }
              },
              {     // rule for css
                  //use: ['style-loader', 'css-loader'],//applied from R to Left
                  //loader and use identical 
                  loader: ExtractTextPlugin.extract({
                      loader: 'css-loader'
                  }),
                  test: /\.css$/
              },
              {   //rule for image handling
                  test: /\.(jpe?g|png|gif|svg)$/,
                  use:[//url-loader checks if image is small or large
                      {
                        loader: 'url-loader',
                    //limit set to 40kb image file    
                        options: {limit:40000}
                      },
                      'image-webpack-loader'
                  ]
              }
          ]  
        },
        plugins: [//plugin work outside the webpack pipeline
            //extracttextplugin to find any file tranformed by its loader
            //caught by loader to grabb and put in style.css

            new ExtractTextPlugin('style.css')
        ]
};

module.exports = config;

