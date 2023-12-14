const express = require('express')
const routes = express.Router()
const adminControllers = require('../controllers/admin')
routes.get('/add-users', adminControllers.getUser)
routes.post('/add-users',adminControllers.PostUsers)
routes.get("/admin/dashboard",adminControllers.getUserDashboard)
module.exports = routes