const express = require("express");
const connectToMongo = require("./Database/db");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
connectToMongo(process.env.URL);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server Started At Port ${PORT}`);
});
