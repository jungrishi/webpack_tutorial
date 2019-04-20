// node js property
//imports th path 
const path =  require('path');//for absolute path reference

// object
const config = {
        
    // defines the entrypoint property 
        entry: './src/index.js',

    // object to where to stack and name the output file
        output: {
            //reference to the directive we want to save the bundle.js to
            path: path.resolve(__dirname,'build'),//absolute path
            filename: 'bundle.js'
        },
        module: {
          rules: [
              {
                  //test allows babel applied only to .js files
                  test: /\.m?js$/, //regex expression
                  use: {
                      loader: 'babel-loader'
                  }
              },
              {
                  use: ['style-loader', 'css-loader'],//applied from R to Left
                  test: /\.css$/
              }
          ]  
        }
};

module.exports = config;

