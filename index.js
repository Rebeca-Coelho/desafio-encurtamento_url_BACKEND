const express = require("express")
const router = express.Router()

router.get("/wisereducacao", function(request, response){
    response.status(200).send({
        title: "Wiser Educacao - Idiomas",
        version: "1.0.0",
        mensage: "Wiser educacao - Dona da rede de idiomas Wise up."
    })
})

module.exports = router
