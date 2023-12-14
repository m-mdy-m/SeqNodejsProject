const Users = require("../models/users-home");

exports.getUser = (req, res) => {
  res.render("admin/add-user", {
    title: "add-user",
    path: req.path,
    editing: false,
  });
};

exports.PostUsers = (req, res, next) => {
  const body = req.body;
  const name = body.name;
  const email = body.email;
  const comments = body.comments;
  console.log("name =>", name);
  console.log("email =>", email);
  console.log("comments =>", comments);
  const newUser = new Users(null, name, email, comments);
  newUser
    .addUser()
    .then(() => {
      console.log("add new users");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUserDashboard = (req, res) => {
  Users.SelectAll()
    .then((users) => {
      res.render("admin/dashboard", {
        title: "dashboard",
        path: req.path,
        users: users[0],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.deleteUser = (req, res) => {
  const userId = req.params.userId;
  Users.deleteById(userId);
  res.redirect("/admin/dashboard");
};
exports.getEditUser = (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const userId = req.params.userId;
  Users.findById(userId)
    .then(([users, forms]) => {
      res.render("admin/add-user", {
        title: "Update User Information",
        path: req.path,
        editing: editMode,
        user: users[0],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.editUser = (req, res) => {
  const body = req.body;
  const userId = body.userId;
  const new_name = body.name;
  const new_email = body.email;
  const new_comments = body.comments;
  Users.editUser(userId,new_name,new_email,new_comments)
  res.redirect("/")
};
