const mongoose = require('mongoose')
const validator = require('validator')


const productSchema= mongoose.Schema({
    categoryId:{
       type: mongoose.Types.ObjectId, 
       ref: 'Category',
       required:true
     },
     name:{
         type: String
     },
     price:{
         type: String
     },
     isActive:{
         type: Boolean
     },
     createdAt:{
         type: Date
     }
 });    


 productSchema.virtual('order',{
    ref: 'Order',
    localField:'_id',
    foreignField:'productId'
});
productSchema.set('toObject', { virtuals: true })
productSchema.set('toJSON', { virtuals: true })

const Products=mongoose.model('Products',productSchema);

module.exports = Products