const { getAllUsers, createUser } = require("../controllers/users.controller")

const router = require("express").Router() 

router.route("/").get(getAllUsers).post(createUser)

module.exports = router;