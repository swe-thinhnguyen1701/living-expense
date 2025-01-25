const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
require("dotenv").config();

const resolvers = {
    Query: {
        me: async (_parent, _args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);
                return user;
            }

            throw AuthenticationError;
        }
    },
    Mutation: {
        addUser: async (_parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },
        login: async (_parent, { username, password }) => {
            try {
                const user = await User.findOne({ username });
                if (!user) throw AuthenticationError;

                const isCorrectPassword = await user.isCorrectPassword(password);
                if (!isCorrectPassword) throw AuthenticationError;

                const token = signToken(user);
                return { token, user };
            } catch (error) {
                console.log("Error occurs while log-in");
                throw AuthenticationError;
            }
        },
        setBudget: async (_parent, { amount }, context) => {
            if (context.user) {
                const user = await User.findByIdAndUpdate(
                    context.user._id,
                    { budget: amount },
                    { new: true });
                return user;
            }

            throw AuthenticationError;
        },
        addExpense: async (_parent, { expense }, context) => {
            if (context.user) {
                const user = await User.findByIdAndUpdate(
                    context.user._id,
                    { $addToSet: { expenses: expense } },
                    { new: true, runValidators: true });
                return user;
            }

            throw AuthenticationError;
        },
        addIncome: async (_parent, { income }, context) => {
            if (context.user) {
                const user = await User.findByIdAndUpdate(
                    context.user._id,
                    { $addToSet: { incomes: income } },
                    { new: true, runValidators: true });
                return user;
            }

            throw AuthenticationError;
        },
        removeIncome(_parent, { incomeId }, context) {
            if (context.user) {
                const user = User.findByIdAndUpdate(
                    context.user._id,
                    { $pull: { incomes: { _id: incomeId } } },
                    { new: true });
                return user;
            }

            throw AuthenticationError;
        },
        removeExpense(_parent, { expenseId }, context) {
            if (context.user) {
                const user = User.findByIdAndUpdate(
                    context.user._id,
                    { $pull: { expenses: { _id: expenseId } } },
                    { new: true });

                return user;
            }

            throw AuthenticationError;
        },
        editIncome(_parent, { incomeId, amount, description }, context) {
            const updateField = {};
            if(amount !== undefined) 
                updateField["incomes.$.amount"] = amount;
            if(description !== undefined)
                updateField["incomes.$.description"] = description;

            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id, "incomes._id": incomeId },
                    { $set: updateField },
                    { new: true }
                );
            }

            throw AuthenticationError;
        },
        editExpense(_parent, { expenseId, description, amount, category, note }, context) {
            const updateField = {};
            if(description !== undefined)
                updateField["expenses.$.description"] = description;
            if(amount !== undefined)
                updateField["expenses.$.amount"] = amount;
            if(category !== undefined)
                updateField["expenses.$.category"] = category;
            if(note !== undefined)
                updateField["expenses.$.note"] = note;

            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id, "expenses._id": expenseId },
                    { $set: updateField },
                    { new: true }
                );
            }

            throw AuthenticationError;
        }
    }
};

module.exports = resolvers;