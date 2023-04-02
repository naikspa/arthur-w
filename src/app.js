const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const port = 3000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
require("dotenv").config();

mongoose.set("strictQuery", false);
console.log(process.env.MDB_URI);
mongoose
  .connect(process.env.MDB_URI)
  .then(() => console.log("SE HA CONECTADO A MONGODB"))
  .catch((e) =>
    console.error("No se conecto a MONGODB debido a este error:" + e)
  );

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../public/views"));
//routes
app.use(require("./routes/index.routes"));
app.use(
  compression({
    level: 6,
    threshold: 10 * 1000,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) {
        return false;
      }
      return compression.filter(req, res);
    },
  })
);

app.use(express.static(path.join(__dirname, "../public")));

app.listen(port, () => {
  console.log("Server on Port " + process.env.PORT);
});
