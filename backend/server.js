import express from "express";
import goals from "./routes/goals.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goals);
app.listen(port, () => console.log(`Server Started Port ${port}`));
