const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB!!!");
  }
);

const routes = require("./routes/routes");

app = express();

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());

app.use("/api", routes);

app.listen(8000);
