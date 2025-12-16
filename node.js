const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.use(express.json());


mongoose.connect("mongodb://localhost:27017/testdb");


mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);


app.post("/register", async (req, res) => {
  const user = new User(req.body);

 
  await user.save();


  res.send("User created");
});


app.get("/users", (req, res) => {
  const users = User.find(); 
  res.json(users); 
});


app.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

app.delete("/user/:i
