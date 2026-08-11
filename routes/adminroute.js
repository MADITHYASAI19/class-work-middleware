const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const attachUser = require("../middleware/attachuser");

function adminCheck(req, res, next) {

    if (req.user.role !== "admin") {
        return res.status(403).json({
            success: false,
            message: "Admin access required"
        });
    }

    next();
}

router.get("/admin", auth, (req, res) => {
    res.send("Authentication Required");
});

router.get(
    "/admin/dashboard",
    auth,
    attachUser,
    adminCheck,
    (req, res) => {

        res.json({
            success: true,
            message: "Welcome to Admin Dashboard"
        });

    }
);

module.exports = router;