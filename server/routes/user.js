const router = require("express").Router();
const userController = require("../controller/userController")

const {verifyToken,verifyTokenAndAuth, verifyTokenAndAdmin} 
= require("../middleware/jwt")

//UPDATE USER
router.put("/:id",verifyTokenAndAuth,userController.updateUser)

//DELETE USER BY ID
router.delete("/:id",verifyTokenAndAuth,userController.deleteUserById);

//GET USER STATS
router.get("/stats",userController.getUserStats );

//GET USER BY ID
router.get("/find/:id", verifyTokenAndAdmin,userController.getUserByIdForAdmin );

//GET ALL USERS
router.get("/", verifyTokenAndAdmin,userController.getAllUsersForAdmin );






module.exports = router