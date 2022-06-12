const router = require("express").Router();
const authController = require("../controller/authController")


//register api
router.post("/auth/register",authController.register)

//login api
router.post("/auth/login",authController.login)

module.exports = router;