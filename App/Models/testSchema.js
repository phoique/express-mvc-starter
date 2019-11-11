import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const testSchema = new Schema({
    text: {
        type: String,
        required: true
    }
});

const tableName = 'test';
export default mongoose.model(tableName, testSchema);