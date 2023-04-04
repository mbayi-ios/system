const router = require("express").Router()
const users = require("./users")
const populations = require("./populations")
const prayercells = require("./prayercells")
const lipanampesa = require("./lipanampesa")

router.use("/users", users);
router.use("/populations", populations)
router.use("/prayercells", prayercells)
router.use("/lipanampesa", lipanampesa)

module.exports = router;
