const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dhruv#@4567",
  database: "App"
});

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
  ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
  ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
];

try {
    connection.query(q, [users] ,(err, result) =>{
        if(err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
        console.log(result[1]);

    });
}catch{
    console.log(err);
}

connection.end();
let getRandomUser = () => {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

