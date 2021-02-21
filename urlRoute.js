const express = require("express")
const router = express.Router()
const controller = require("../controller/urlController")

router.get('/wiseeducacao', urlController.getAll)
router.post('/wisereducacao/add', urlController.addUrl)
router.put('/wisereducacao/:id', urlController.updateUrl)
router.delete('/wisereducacao/:id', urlController.deleteUrl)

module.exports = route