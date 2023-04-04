const router = require("express").Router()
const users = require("./users")
const prayercells = require("./prayercells")
const lipanampesa = require("./lipanampesa")

router.use("/users", users);
router.use("/prayercells", prayercells)
router.use("/lipanampesa", lipanampesa)

module.exports = router;
