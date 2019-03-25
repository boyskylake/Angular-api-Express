var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/test', { useNewUrlParser : true })

mongoose.connection.on('connected', function () {
    console.log("connected Mongo");
    
});

mongoose.connection.on('error', function (err) {
    console.log("error");
    
});

mongoose.connection.on('disconnected', function () {
    console.log("disconnected");
    
});

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('disconnected through app ternination');
        process.exit(0);
    });
});