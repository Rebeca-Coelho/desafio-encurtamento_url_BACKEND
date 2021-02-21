const url = require("../model/urlSchema")

const getAll = (request, response)=>{
    console.log(request.url)

    url.find((error, url) =>{
        if(error){
            return response.status(404).send(error)
        } else{
            return response.status(200).send({
                mensagem: "GET with sucess",
                url
            })
        }
    })
}

const addUrl = (request, response)=>{
    const urlBody = request.body 
    const url = new urlCollection(urlBody)

    url.save((error)=>{
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem: "POST with sucess",
                url
            })
        }
    })
}

const updateUrl = (request, response) =>{
    const { id } = request.params 
    const { accessUrl, description, acessValidity } = request.body 

    const urlUpdated = urlModel.find(url => url.id == id) 

    const newUrl = { 
        id: updatedUrl.id,
        accessUrl: acessUrl,  
        description: description,
        acessValidity: acessValidity
    }

    const index = urlModel.indexOf(urlUpdated) 

    urlModel[index] = newUrl

    response.status(200).json(urlModel[index])

}

const deleteUrl = (request, response)=>{
    const { id } = request.params
    const urlFiltered = urlModel.find(url => url.id == id)

    const index = urlModel.indexOf(urlFiltered)
    urlModel.splice(index, 1)

    response.json({mensagem: "Url deleted with sucess"})
}

module.exports = {
    getAll,
    addUrl,
    updateUrl,
    deleteUrl

}
