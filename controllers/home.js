const Users = require("../models/users-home");
exports.getHome = (req, res, next) => {
  Users.SelectAll()
    .then((users) => {
      res.render("home", {
        title: "HOME",
        path: req.path,
        users: users[0],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
