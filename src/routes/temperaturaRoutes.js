const express = require("express")

const router = express.Router()

const temperaturaController = require("../controller/temperaturaController")

router.post("/temperatura", temperaturaController.receberTemperatura)

module.exports = router