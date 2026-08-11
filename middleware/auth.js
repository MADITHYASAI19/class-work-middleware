function auth(req, res, next) {

    const token = req.headers.authorization;

    if (token === "secret123") {
        next();
    } else {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        });
    }
}

module.exports = auth;