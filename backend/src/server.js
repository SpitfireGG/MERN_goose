import express from "express";
import router from "./router/router.js";

const app = express();

app.use("/api/notes", router);

app.listen(5000, () => {
  console.log("server running on port 5000");
});

console.log("motherfucker");
