const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/message", userController.message);
router.get("/get", userController.get);
router.post("/login", userController.login);
router.post("/getLogin", userController.getLogin);
//router.post('/login', function(req, res){
 //   userController.login
 // });
module.exports = router; 

