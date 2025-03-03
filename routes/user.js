//login - signup
const express = require("express");
const { handleUserSignUp, handleUserLogIn } = require("../controllers/user.js")
const router1 = express.Router();

router1.get("/signup",(req,res) => {
    return res.render("user/signup");
});
router1.get("/login",(req,res) => {
    return res.render("user/login");
});

router1.post('/', handleUserSignUp);
router1.post('/login', handleUserLogIn);

module.exports = {userRoute : router1};