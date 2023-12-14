const db = require("../database/database")
module.exports = class users {
    constructor(id,name,email,comment){
        this.id  = id
        this.name = name
        this.email = email
        this.comment = comment
    }
    addUser(){
        return db.execute(`INSERT INTO nodemysqlcrud VALUES (NULL,"${this.name}",${this.email}, "${this.comment}")`)
    }
    static SelectAll(){
        return db.execute('SELECT * FROM nodemysqlcrud')
    }
    static findById(id){
        return db.execute(`SELECT * FROM nodemysqlcrud WHERE nodemysqlcrud.id = ? ${id}`)
    }
}