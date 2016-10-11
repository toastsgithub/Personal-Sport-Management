// console.log("PAth: "+__dirname);
var path = require('path');
// console.log("PAth: "+__dirname);
module.exports = {

    entry:'./entry.js',
    output:{
        path: path.join(__dirname,'/dist'),
        filename:'bundle.js'
    },
    resolve:{
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[
            {test:/\.jsx?$/,loaders:['babel']}
        ]
    }

};

console.log("done here");