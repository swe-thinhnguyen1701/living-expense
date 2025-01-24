const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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
    incomes: [{
        type: Schema.Types.ObjectId,
        ref: "Income"
    }],
    expenses: [{
        type: Schema.Types.ObjectId,
        ref: "Expense"
    }],
    budgets: {
        type: Number,
        default: 0,
        max: 999999,
        min: 0.01
    }
});

userSchema.pre("save", async function(next) {
    if(this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
});

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const User = model("User", userSchema);

module.exports = User;