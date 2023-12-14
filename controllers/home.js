const Users = require("../models/users-home");
exports.getHome = (req, res, next) => {
  Users.SelectAll((user) => {
    console.log("user =>", user);
    res.render("home", {
      title: "HOME",
      path: req.path,
    });
  });
};
