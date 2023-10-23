import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  password: {
    type: String,
    required: true,
    validate: /.*/
  }
});

const User = mongoose.model("passlockr.users", userSchema);

export default User;
