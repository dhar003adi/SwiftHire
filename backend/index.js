const express = require("express");
const connectToMongo = require("./Database/db");
const errorHandler = require("./middleware/errorHandler");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
connectToMongo(process.env.URL);
app.use(express.json());

app.use("/auth", require("./routes/Auth"));
app.use("/profile", require("./routes/Profile"));
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server Started At Port ${PORT}`);
});
