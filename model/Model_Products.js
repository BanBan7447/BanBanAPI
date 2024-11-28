const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const optionProducts = new Schema({
    id: {type: ObjectID},
    image: {
        type: String,
        default: 'Unknown',
    },
    name: {
        type: String,
        required: true,
        default: 'Unknown',
    },
    price: {
        type: Number,
        require: true,
        default: 'Unknown',
    },
    describe: {
        type: String,
        require: true,
        default: 'Unknown',
    },
    categoryID:{
        type: ObjectID,
        ref: 'Categories',
    }
});

module.exports = mongoose.model.Products || mongoose.model('Products', optionProducts);