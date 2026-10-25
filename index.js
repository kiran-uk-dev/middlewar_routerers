
const express = require("express");
const app = express();

const port = 3200;


const addUser = (req, res, next) => {
    req.user = "Guest";
    next();
};


app.get("/welcome", addUser, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});


app.get("/message", addUser, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
