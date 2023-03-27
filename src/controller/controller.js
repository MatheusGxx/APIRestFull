const productsModel = require('../models/products')

 async function get(req,res){ // req params é apenas para pegar o id da url quando tem na rota /produtos/:id
    const { id } = req.params
     
    const obj = id ? { _id: id} : null // if ternario 

    
    const products =  await productsModel.find(obj)

   res.send(products) 
}
async function post(req, res){
  const{
    name,
    brand,
    price,
  } = req.body // req.body pega as informaçoes selecionadas do body ( page )
  
  console.log(req.body)

  const product =  new productsModel({
    name,
    brand,
    price,
  })

  product.save()

  res.send({
    message: 'Requisiçao de dados feita para a APIRestFull com sucesso'
  })
}

module.exports = {
    get,
    post,
}