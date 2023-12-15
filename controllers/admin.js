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
  Users.create({
    name: name,
    email: comments,
    comments: comments,
  })
    .then((result) => {
      console.log("created users");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUserDashboard = (req, res) => {
  Users.findAll().then((users) => {
    res.render("admin/dashboard", {
      title: "dashboard",
      path: req.path,
      users: users,
    });
  });
};
exports.deleteUser = (req, res) => {
  const userId = req.params.userId;
  Users.findByPk(userId)
    .then((users) => {
      return users.destroy();
    })
    .then((result) => {
      console.log("user delete");
      res.redirect("/admin/dashboard");
    })
    .catch();
};
exports.getEditUser = (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const userId = req.params.userId;
  Users.findByPk(userId)
    .then((users) => {
      res.render("admin/add-user", {
        title: "Update User Information",
        path: req.path,
        editing: editMode,
        user: users,
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
  Users.findByPk(userId)
    .then((users) => {
      users.name = new_name;
      users.email = new_email;
      users.comments = new_comments;
      return users.save();
    })
    .then((result) => {
      console.log("user update");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
