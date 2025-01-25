const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.AUTH_SECRET_KEY;
const expiration = "3h";

module.exports = {
    AuthenticationError: new GraphQLError("Fail to authenticate user", {
        extensions: { code: "UNAUTHENTICATED" }
    }),

    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (!token)
            return req;

        if (req.headers.authorization)
            token = token.split(" ").pop().trim();

        try {
            const { data } = jwt.verify(token, secretKey, { maxAge: expiration });
            req.user = data;
        } catch (error) {
            console.log("Invalid token", error.message);
            throw new GraphQLError("Invalid or expired token", {
                extensions: { code: "UNAUTHENTICATED" }
            });
        }

        return req;
    },

    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
        return jwt.sign({ data: payload }, secretKey, { expiresIn: expiration });
    }
}