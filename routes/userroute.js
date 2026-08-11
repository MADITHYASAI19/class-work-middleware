const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const attachUser = require("../middleware/attachuser");

router.get("/users", (req, res) => {
    res.send("Public Users");
});

router.post("/users", (req, res) => {
    const user = req.body;

    res.json({
        message: "User Created",
        user: user
    });
});

router.post("/register", (req, res) => {
    const data = req.body;

    res.json({
        message: "Registration Successful",
        data: data
    });
});

router.get("/profile", auth, attachUser, (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});

module.exports = router;