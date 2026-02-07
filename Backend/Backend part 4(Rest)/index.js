const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// dummy data
let posts = [
  { id: uuidv4(), username: "dhruv", content: "my name is dhruv" },
  { id: uuidv4(), username: "sunflower", content: "sunflower is very beautiful" },
  { id: uuidv4(), username: "coding", content: "i love coding" }
];

// ROUTES

// show all posts
app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

// new post form
app.get("/posts/new", (req, res) => {
  res.render("new");
});

// create post
app.post("/posts", (req, res) => {
  const { username, content } = req.body;
  posts.push({ id: uuidv4(), username, content });
  res.redirect("/posts");
});

// show single post
app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  if (!post) return res.status(404).send("Post not found");
  res.render("show", { post });
});

// edit form
app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  if (!post) return res.status(404).send("Post not found");
  res.render("edit", { post });
});

// update post
app.patch("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  if (!post) return res.status(404).send("Post not found");

  post.content = req.body.content;
  res.redirect(`/posts/${post.id}`);
});

// delete post
app.delete("/posts/:id", (req, res) => {
  posts = posts.filter(p => p.id !== req.params.id);
  res.redirect("/posts");
});

// server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
