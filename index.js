
const express = require("express");
const app = express();

const port = 3200;

// Custom Middleware
const addUser = (req, res, next) => {
    req.user = "Guest";
    next();
};

// Welcome route
app.get("/welcome", addUser, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Message route
app.get("/message", addUser, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
