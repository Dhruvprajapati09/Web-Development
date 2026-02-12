const mongoose = require('mongoose');
main().then( () => { console.log("connection successfull.")}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);


User.insertMany([
  { name : "batman", email : "bat@gmail.com", age : 21},
  { name : "spiderman", email : "spider@gmail.com", age : 10},
  { name : "ironman", email : "iron@gmail.com", age : 22}
]).then( (res) => {
  console.log(res);
});
// const User1 = new User({
//   name:"Adam",
//   email:"adam@gmail.com",
//   age:21
// });

// User1.save();