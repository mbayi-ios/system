const { getAllUsers, createUser, deleteUser } = require("../controllers/users.controller")

const router = require("express").Router() 

router.route("/").get(getAllUsers).post(createUser).delete(deleteUser)

module.exports = router;