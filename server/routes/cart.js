const router = require("express").Router();
const cartController = require("../controller/cartController")
const {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin} 
= require("../middleware/jwt");

//CREATE CART
router.post("/", verifyToken,cartController.createCart);

//UPDATE CART
router.put("/:id", verifyTokenAndAuth,cartController.updateCart);

//DELETE CART
router.delete("/:id", verifyTokenAndAuth,cartController.deleteCart);

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuth,cartController.getUserCart);

 //GET ALL FOR ADMIN
router.get("/", verifyTokenAndAdmin,cartController.getAllForAdmin);

module.exports = router;