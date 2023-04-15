const mongoose = require("mongoose");
const UserDetailsSchema = new mongoose.Schema(
  {
    name: String,
    phoneNo: String,
    address: String,
    district: String,
    email: String,
    password: String,
  },
  { collection: "userDetails" }
);
mongoose.model("userDetails", UserDetailsSchema);
