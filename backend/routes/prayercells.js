const { getAllPrayercells, createPrayercell } = require("../controllers/prayercells.controller");

const router = require("express").Router() 

router.route("/").get(getAllPrayercells).post(createPrayercell)

module.exports = router;