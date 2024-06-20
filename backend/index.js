const express = require("express");
const connectToMongo = require("./Database/db");
const errorHandler = require("./middleware/errorHandler");
const multer = require("multer");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
connectToMongo(process.env.URL);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

app.post("/upload", upload.single("resumeImage"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.status(200).json({
    message: "File uploaded successfully",
    filePath: req.file.path,
  });
});
app.use("/auth", require("./routes/Auth"));
app.use("/profile", require("./routes/Profile"));
app.use("/admin", require("./routes/Admin"));
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server Started At Port ${PORT}`);
});
