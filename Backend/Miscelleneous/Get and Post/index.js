const express = require("express");
let app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));


app.get("/register", (req,res) =>{
    let {user , password} = req.query;
    res.send(`started gat request. welcome ${user}`);
});

app.post("/register", (req,res) => {
    let {user, password} = req.body;
    res.send(`started gat request.welcome ${user}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});