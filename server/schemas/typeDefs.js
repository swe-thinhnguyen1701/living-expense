const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        budgets: Int
        incomes: [Income]
        expenses: [Expense]
    }

    type Income {
        _id: ID!
        amount: Float!
        description: String!
        userId: ID!
    }

    type Expense {
        _id: ID!
        description: String!
        amount: Float!
        category: String!
        date: String!
        note: String
        userId: ID!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        getExpenses(userId: ID!): [Expense]
        getIncomes(userId: ID!): [Income]
    }

    type Mutation {
        login(username: String!, password: String): Auth
        addUser(user: UserInput!): Auth
        setBudget(amount: float!): User
        addIncome(income: IncomeInput!): User
        addExpense(expense: ExpenseInput!): User
        removeIncome(incomeId: ID!): User
        removeExpense(expenseId: ID!): User
        editIncome(incomeId: ID!, amount: Float, description: String): User
        editExpense(expenseId: ID!, description: String, amount: Float, category: String, note: String): User
    }

    input UserInput {
        username: String!
        email: String!
        password: String!
    }

    input IncomeInput {
        amount: Float!
        description: String!
    }

    input ExpenseInput {
        description: String!
        amount: Float!
        category: String!
        date: String!
        note: String
    }
`

module.exports = typeDefs;