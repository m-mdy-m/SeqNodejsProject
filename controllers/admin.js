const Users = require("../models/users-home");

exports.getUser = (req,res)=>{
    res.render('admin/add-user', {
        title:"add-user",
        path:req.path,
    })
}

exports.PostUsers = (req, res, next) => {
  const body = req.body;
  const name = body.name;
  const email = body.email;
  const comments = body.comments;
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
