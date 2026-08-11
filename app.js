const express = require("express");

const app = express();

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorhandler");

const userRoutes = require("./routes/userroute");
const adminRoutes = require("./routes/adminroute");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(logger);

app.get("/", (req, res) => {
    res.send("Public Home");
});

app.use(userRoutes);
app.use(adminRoutes);

app.get("/crash", (req, res, next) => {

    const error = new Error("Something crashed");

    next(error);

});

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});