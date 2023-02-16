import mongoose from "mongoose";

const urloffline: string = "mongodb://localhost/microTodoDB";

mongoose
  .connect(urloffline)
  .then(() => {
    console.log("database is connected...");
  })
  .catch(() => {
    console.log("failed to connect to database");
  });
