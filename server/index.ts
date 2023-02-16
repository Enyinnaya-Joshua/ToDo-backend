import express, { Request, Response, Application } from "express";
require("./config/db");
import user from "./route/TaskRoute"

const port: number = 1998;

const server: Application = express();

server.use(express.json());

server.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "server is up and running",
  });
});

server.use("api", user)

server.listen(port, () => {
  console.log(`server is running port: ${port}`);
});
