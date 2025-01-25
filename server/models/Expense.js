const {Schema, model} = require("mongoose");

const expenseSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    note: {
        type: String
    }
});

module.exports = expenseSchema;