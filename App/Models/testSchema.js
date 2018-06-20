const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    text: {
        type: String,
        required: true
    }
});

const tableName = 'test';
module.exports = mongoose.model(tableName, testSchema);