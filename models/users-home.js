const db = require("../database/database");
module.exports = class users {
  constructor(id, name, email, comment) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.comment = comment;
  }
  addUser() {
    return db.execute(
      "INSERT INTO nodemysqlcrud (id, name, email, comment) VALUES (?, ?, ?, ?)",
      [this.id, this.name, this.email, this.comment]
    );
  }
  static SelectAll() {
    return db.execute("SELECT * FROM nodemysqlcrud");
  }
  static findById(userId) {
    return db.execute(
      "SELECT * FROM nodemysqlcrud WHERE nodemysqlcrud.id = ?",
      [userId]
    );
  }
  static editUser(id,name,email,comment) {
    return db.execute(
      `UPDATE nodemysqlcrud SET name=?, email=?, comment=? WHERE id=?`,
      [name, email,comment, id]
    );
  }
  static deleteById(id) {
    return db.execute(`DELETE FROM nodemysqlcrud WHERE id=${id}`);
  }
};
