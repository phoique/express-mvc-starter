const mongoose = require('mongoose');

module.exports = () => {
    //db info
    const dbUrl = 'localhost';
    const dbPort = '27017';
    const datebase = 'testdb';

    // mongoose connect
    mongoose.connect(`mongodb://${dbUrl}:${dbPort}/${datebase}`);
    // if mongoose runs
    mongoose.connection.on('open', () => {
        //console.log('Mongodb Connected');
    });
    // if mongoose doesn't runs
    mongoose.connection.on('error', (error) => {
        console.log(`Mongoose error: ${error}`);
    });

    mongoose.Promise = global.Promise;
}