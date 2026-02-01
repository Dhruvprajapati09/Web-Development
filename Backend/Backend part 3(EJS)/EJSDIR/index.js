const express = require('express');
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/public")));

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs"); 
});

app.get("/rolldice", (req, res) => {
    let diceval = Math.floor(Math.random() * 6 + 1);
    res.render("rolldice.ejs", { diceval });
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instagram = require("./data.json");

    let data = instagram[username];

    if (!data) {
        return res.status(404).send("User not found!");
    }

    res.render("instagram.ejs", { data });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
