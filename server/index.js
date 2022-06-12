const express = require("express")
const allRoutes = require("./routes/main")
require("dotenv").config();
require("./db/mongoConn");
const app = express();
const helmet = require("helmet")
const cors = require("cors")

app.use(express.json());
app.use(cors());
app.use(helmet());


// app.get("/",function(req,res){
//     res.send("hello")
// })


//all apis
app.use("/v1/api",allRoutes.authRouter)
app.use("/v1/api/user",allRoutes.userRouter)
app.use("/v1/api/product",allRoutes.productRouter)
app.use("/v1/api/cart",allRoutes.cartRouter)
app.use("/v1/api/order",allRoutes.orderRouter)
app.use("/v1/api",allRoutes.stripeRouter)


const port=process.env.APP_PORT || 30000
app.listen(port, ()=>{
    console.log(`server running on ${port}`);
})