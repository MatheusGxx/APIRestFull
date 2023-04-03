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
    Brand,
    price,
  } = req.body // req.body pega as informaçoes selecionadas do body ( page )

  console.log(req.body)

  const product =  new productsModel({
    name,
    Brand,
    price,
  })

  product.save()

  res.send({
    message: 'Requisiçao de dados feita para a APIRestFull com sucesso'
  })
}
async function put(req, res){
 const { id } = req.params

  const product =  await productsModel.findOneAndUpdate({_id: id}, req.body, { new: true}) // pegando o id do produto, falando que todo body pode ser alterado e retornando o valor alterado no postman e no banco de dados.

  res.send({
    message: 'Produto Atualizado com sucesso',
    product,
  })
}
async function remove(req, res){
    const { id } = req.params 

    const remove = await productsModel.deleteOne({_id : id})

    const message = remove ? 'Produto removido com sucesso' : 'error' // if ternario 

    res.send({
        message,
    })

}
module.exports = {
    get,
    post,
    put,
    remove,
}