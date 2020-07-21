const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const axios = require("axios");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/outdoor";
const PORT = process.env.PORT || 3030;

// CONNECT TO THE DB \\
mongoose.connect(
    MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    (err) => {
        console.log(err || "Connected to mongodb");
    }
);

// MIDDLEWARE \\
app.use(bodyParser.json());
app.use(logger("dev"));

// ROUTES \\
app.use("/api/outdoor", outdoorRouter);
app.use("/api/user", userRouter);

app.use(express.static(`${__dirname}/client/build`));

app.use("*", (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(PORT, (err) => {
    console.log(err || `server running on ${PORT}`);
});