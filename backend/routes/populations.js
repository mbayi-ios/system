const { createPopulation, getAllPopulations } = require("../controllers/populations.controller");

const router = require("express").Router() 

router.route("/").get(getAllPopulations).post(createPopulation)

module.exports = router;