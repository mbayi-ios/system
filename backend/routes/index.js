const router = require("express").Router()
const users = require("./users")
const lipanampesa = require("./lipanampesa")

router.use("/users", users);
router.use("/lipanampesa", lipanampesa)

module.exports = router;
