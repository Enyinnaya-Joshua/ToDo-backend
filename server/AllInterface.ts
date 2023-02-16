import mongoose from "mongoose";

export type taskData = {
  title?: string;
  date?: string;
  remainder?: string;
  note?: string;
  Day: {
    type: mongoose.Schema.Types.ObjectId;
    ref: "users";
  };
};

export type taskData2 = {
  title?: string;
  date?: string;
  remainder?: string;
  note?: string;
  Day: {
    type: mongoose.Schema.Types.ObjectId;
    ref: "users";
  };
};
