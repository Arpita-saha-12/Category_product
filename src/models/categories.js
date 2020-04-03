const mongoose = require('mongoose')
const validator = require('validator')

const categorySchema= mongoose.Schema({
    name:{
        type: String
    },
    isActive:{
        type: Boolean
    },
    createdAt:{
        type: Date
    }
});

categorySchema.virtual('products', {
    ref: 'Products',
    localField: '_id',
    foreignField: 'categoryId'
});

categorySchema.set('toObject', { virtuals: true })
categorySchema.set('toJSON', { virtuals: true })

const categories=mongoose.model('Category',categorySchema);

module.exports = categories