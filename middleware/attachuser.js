function attachUser(req, res, next) {

    req.user = {
        id: 101,
        name: "Harsh",
        role: "student"
    };

    next();
}

module.exports = attachUser;