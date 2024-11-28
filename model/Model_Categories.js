const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const optionCategories = new Schema({
    id: { type: ObjectID },
    name: {
        type: String,
        required: true,
        default: 'Unknown'
    }
});

module.exports = mongoose.model.Categories || mongoose.model('Categories', optionCategories);