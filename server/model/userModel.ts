import mongoose from "mongoose";
import { taskData } from "../AllInterface";

type collectData = {
  title: string;
  data: string;
  remainder: string;
};

interface UserData {
  name: string;
  email: string;
  password: string;
  myDay: taskData[];
  important: taskData[];
  planned: taskData[];
  assigned: taskData[];
  task: taskData[];
}

interface myData extends UserData, mongoose.Document {}

const userSchema = new mongoose.Schema({
  name: [
    {
      type: String,
      require: true,
    },
  ],
  email: [
    {
      type: String,
      require: true,
    },
  ],
  password: [
    {
      type: String,
      require: true,
    },
  ],
  myDay: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  assigned: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  planned: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],

  task: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
  ],
});

const userModel = mongoose.model("UserModel", userSchema);

export default userModel;
