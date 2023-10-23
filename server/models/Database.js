import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    validate: /.*/
  },
  username: {
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/
  },
  platform: {
    type: String,
    required: true,
    validate: /.*/
  },
  password: {
    type: String,
    required: true,
    validate: /.*/
  }
});

const database = mongoose.model("passlockr.database", userSchema);
export default database;
