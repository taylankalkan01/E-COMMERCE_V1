const authRouter = require("./auth");
const userRouter = require("./user")
const productRouter = require("./product")
const orderRouter = require("./order")
const cartRouter = require("./cart")
const stripeRouter = require("../config/stripe")

module.exports = {
    authRouter,
    userRouter,
    productRouter,
    orderRouter,
    cartRouter,
    stripeRouter,
}