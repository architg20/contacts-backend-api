const express = require("express");
//Routes for User Profile management
const {
  registerUser,
  currentUser,
  loginUser,
} = require("../controllers/userController");

const validateToken =require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;