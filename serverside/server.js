const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoUrl =
  "mongodb+srv://sweetpoison:sweetpoison@cluster0.nfzy6lb.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

  require("./userDetails");
  const User = mongoose.model("userDetails");

app.post("/register", async (req, res) => {
  const { name, phoneNo, address, district, email, password } = req.body;
  try {
    await User.create({
      name,
      phoneNo,
      address,
      district,
      email,
      password,
    })
    res.send({status: "OK"});
  } catch (err) {
    res.send({status: "Error"});
  }});

app.listen(8000, () => {
  console.log("Server is listening");
});

// app.post("/post", async (req, res) => {
//   console.log(req.body);
//   const { data } = req.body;
//   try {
//     if (data == "Sabin") {
//       res.send("OK");
//     } else {
//       res.send("Not OK");
//     }
//   } catch (err) {
//     res.send("Error");
//   }
// });

// require("./userDetails");
// const User = mongoose.model("userDetails");
// app.post("/register", async (req, res) => {
//   const { name, phoneNo, address, district, email, password } = req.body;
//   try {
//     const user = new User({
//       name,
//       phoneNo,
//       address,
//       district,
//       email,
//       password,
//     });
//     await user.save();
//     res.send("OK");
//   } catch (err) {
//     res.send("Error");
//   }
// });
