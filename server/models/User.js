const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const incomeSchema = require("./Income");
const expenseSchema = require("./Expense");

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 6,
        maxlength: 32
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32
    },
    incomes: [incomeSchema],
    expenses: [expenseSchema],
    budgets: {
        type: Number,
        default: 0,
        max: 999999,
        min: 0.00
    }
});

userSchema.pre("save", async function(next) {
    if(this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const User = model("User", userSchema);

module.exports = User;