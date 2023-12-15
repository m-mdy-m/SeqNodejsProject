const express = require("express");
const path = require("path");
const app = express();
const homeRouter = require("./routes/home");
const adminRouter = require("./routes/admin");
const bodyParser = require("body-parser");
const sequelize = require("./database/database");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(homeRouter);
app.use(adminRouter);

sequelize
  .sync()
  .then((result) => {
    console.log('created table');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server run on port 3000");
});
