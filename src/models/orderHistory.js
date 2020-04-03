const mongoose = require('mongoose')
const validator = require('validator')


const orderSchema = mongoose.Schema({
    email:{
        type: String
    },
    productId:{
        type: mongoose.Types.ObjectId,
         ref: 'Products',
         required:true
    },
    createdAt:{
        type: Date
    }

});
const orderHistory=mongoose.model('Order',orderSchema);

module.exports = orderHistory