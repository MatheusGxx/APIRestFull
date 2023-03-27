const productsModel = require('../models/products')

 async function get(req,res){ // req params é apenas para pegar o id da url quando tem na rota /produtos/:id
    const { id } = req.params
     
    const obj = id ? { _id: id} : null // if ternario 

    
    const products =  await productsModel.find(obj)

   res.send(products) 
}


module.exports = {
    get,
}