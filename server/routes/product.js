const productController = require("../controller/productController")
const {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin} 
= require("../middleware/jwt");
const router = require("express").Router();

//CREATE PRODUCT
router.post("/", verifyTokenAndAdmin,productController.createProduct );

//UPDATE PRODUCT
router.put("/:id", verifyTokenAndAdmin,productController.updateProduct);

//DELETE PRODUCT
router.delete("/:id", verifyTokenAndAdmin,productController.deleteProduct );

//GET PRODUCT BY ID
router.get("/find/:id",productController.getProductById );

//GET ALL PRODUCTS
router.get("/",productController.getAllProducts );

module.exports = router;