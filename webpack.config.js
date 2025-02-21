const path = require("path");

module.exports ={

    entry:{
        app: './src/app.js',
    },
    output:{
        filename:'[name].bundle.js',
        path: path.join(__dirname, 'dist'),
    }
}