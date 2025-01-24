const { Schema, model } = require("mongoose");

const incomeSchema = new Schema({
    amount: {
        type: Number,
        required: true,
        max: 999999,
        min: 0.01
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Income = model("Income", incomeSchema);

module.exports = Income;