import mongoose from 'mongoose';

const datebase = () => {
    //db info
    const dbUrl = 'localhost';
    const dbPort = '27017';
    const datebase = 'testdb';

    // mongoose connect
    mongoose.connect(`mongodb://${dbUrl}:${dbPort}/${datebase}`, { useNewUrlParser: true, useUnifiedTopology: true });
    // if mongoose runs
    mongoose.connection.on('open', () => {
        console.log('Mongodb Connected');
    });
    // if mongoose doesn't runs
    mongoose.connection.on('error', (error) => {
        console.log(`Mongoose error: ${error}`);
    });

    mongoose.Promise = global.Promise;
}

export default datebase;