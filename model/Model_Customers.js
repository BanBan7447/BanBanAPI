const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const optionCustomers = new Schema({
    id: { type: ObjectID },
    avatar: {
        type: String,
        default: 'Unknown',
    },
    name: {
        type: String,
        required: true,
        default: 'Unknown',
    },
    email: {
        type: String,
        required: true,
        unique: true,
        default: 'Unknown',
    },
    phone: {
        type: String,
        required: true,
        default: 'Unknown',
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        default: 'Unknown',
    }
});

module.exports = mongoose.model.Customers || mongoose.model('Customers', optionCustomers);