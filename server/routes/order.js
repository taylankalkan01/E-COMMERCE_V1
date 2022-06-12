const {verifyToken,verifyTokenAndAdmin, verifyTokenAndAuth,} 
= require("../middleware/jwt");
const router = require("express").Router();
const orderController = require("../controller/orderController")

//CREATE ORDER
router.post("/", verifyToken, orderController.createOrder);

//UPDATE ORDER
router.put("/:id", verifyTokenAndAdmin, orderController.updateOrder);

//DELETE ORDER
router.delete("/:id", verifyTokenAndAdmin,orderController.deleteOrder);

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuth, orderController.getUserOrder);

//GET ALL ORDERS FOR ADMIN
router.get("/", verifyTokenAndAdmin,orderController.getAllOrdersForAdmin);

//GET MONTHLY INCOME FOR ADMIN
router.get("/income", verifyTokenAndAdmin,orderController.getMonthlyIncomeForAdmin);

module.exports = router;