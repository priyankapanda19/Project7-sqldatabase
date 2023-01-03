const express = require("express")
const Router = express.Router()
const { signUp, login } = require('../controller/userController2')


Router.get('/test', (req, res) => {
    res.send("testing successful")
})

Router.post('/signUp', signUp)
Router.post('/login', login)

module.exports = Router
