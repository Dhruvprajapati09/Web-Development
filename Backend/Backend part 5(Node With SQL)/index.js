const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodoverride = require("method-override");

app.use(methodoverride("_method"));
app.use(express.urlencoded({ extended:true }));
app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dhruv#@4567",
  database: "App"
});

const getRandomUser = () => [
  faker.string.uuid(),
  faker.internet.username(),
  faker.internet.email(),
  faker.internet.password(),
];

// Home Route
app.get("/",(req, res) => {
  let q = 'SELECT count(*) FROM user';
   try {
    connection.query(q, (err, result) =>{
        if(err) throw err;
        let count = result[0] ["count(*)"];
        res.render("home.ejs", { count });

    });
}catch{
    console.log(err);
    res.send(err);
}
});

//Show Route
app.get("/user", (req, res) => {
  let q = 'SELECT * FROM user';
   try {
    connection.query(q, (err, users) =>{
        if(err) throw err;
        res.render("Showusers.ejs", { users });
    });
}catch{
    console.log(err);
    res.send(err);
}
});

app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
   try {
    connection.query(q, (err, result) =>{
        if(err) throw err;
        let user = result[0];
        res.render("edit.ejs",  { user });
    });
}catch{
    console.log(err);
    res.send(err);
}
});

//Update Route

app.patch("/user/:id", (req, res) => {
   let { id } = req.params;
   let {password: formpassword , username: newusername } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
   try {
    connection.query(q, (err, result) =>{
        if(err) throw err;
        let user = result[0];
        if(formpassword != user.password){
          res.send("Wrong password");
        }else{
          let q2 = `UPDATE user SET username='${newusername}' WHERE id='${id}'`;
          connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user")
});


        }
    });
}catch{
    console.log(err);
    res.send(err);
}
});

app.listen(8080, () => {
     console.log("app is listening on 8080 port");
}); 
// // const q = "INSERT INTO user (id, username, email, password) VALUES ?";

// // const data = [];

// // for (let i = 1; i <= 100; i++) {
// //   data.push(getRandomUser());
// // }


// // let users = [
// //   ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
// //   ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// // ];

// try {
//     connection.query(q, [data] ,(err, result) =>{
//         if(err) throw err;
//         console.log(result);
//         console.log(result.length);
//         console.log(result[0]);
//         console.log(result[1]);

//     });
// }catch{
//     console.log(err);
// }

// connection.end();



