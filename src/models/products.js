const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    Brand:String,
    price: Number,
})

const Model = mongoose.model('products', schema)

module.exports = Model