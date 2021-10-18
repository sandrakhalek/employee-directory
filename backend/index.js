//using import instead of 'const express = require('express')'
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/employee.js";

const app = express();

app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(cors());

let password = "123Tyu456";
const CONNECTION_URL = `mongodb+srv://admin:${password}@cluster0.zq7rt.mongodb.net/employeeDirectory?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("\nConnected to the database!");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
  })
  .catch((err) => {
    console.log("Cannot connect to the database!\n", err);
    process.exit();
  });

mongoose.set("useFindAndModify", false);
app.use("/employee", router);
