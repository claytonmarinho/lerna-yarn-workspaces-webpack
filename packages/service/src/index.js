import { generateRandomProfile } from "@lerna-yarn-workspaces/utils";
import express from "express";

const { PORT = 3005 } = process.env;

const app = express();

app.get("/", function (req, res) {
  const profile = generateRandomProfile();
  res.send(profile);
});

console.log(`👽 Server ready at http://localhost:${PORT}`);

app.listen(PORT);
