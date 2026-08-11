function logger(req, res, next) {

    const now = new Date();

    console.log("--------------------------------");
    console.log("Time:", now.toLocaleTimeString());
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("--------------------------------");

    res.on("finish", () => {
        console.log(`${req.method} ${req.url} → ${res.statusCode}`);
    });

    next();
}

module.exports = logger;