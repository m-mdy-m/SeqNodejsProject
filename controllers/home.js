const Users = require("../models/users-home");
exports.getHome = (req, res, next) => {
  Users.findAll().then(users=>{
    console.log('users =>', users);
    res.render("home", {
      title: "HOME",
      path: req.path,
      users: users,
    });
  }).catch()
};
