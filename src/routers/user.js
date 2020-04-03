const express = require('express')
const Category = require('../models/categories')
const OrderHistory = require('../models/orderHistory')
const Products = require('../models/Products')
const router = new express.Router()

// router.post('/categories', async (req, res) => {
//     const categories = new categories(req.body)

//     try {
//         await categories.save()
//         res.status(201).send(categories)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

router.post('/bulkinscat',(req,res)=>{
    res.send(Category.insertMany(req.body));
});

router.get('/getcategory', async(req,res)=>{

    const data = await Category.find({});
    res.send(data);
});

router.get('/getcatprod',async(req,res)=>{
    res.send(await Category.find({}).populate('products').exec());
});

router.get('/getexpens',async(req,res)=>{
    res.send(await Category.find({}).populate('expensive').exec());
});

router.post('/bulkinshis',(req,res) =>{
    res.send(OrderHistory.insertMany(req.body));
});


router.get('/getorderhis',async(req,res)=>{
    res.send(await OrderHistory.find({}));
});

router.post('/bulkinspro',(req,res) =>{
    res.send(Products.insertMany(req.body));
});


router.get('/getorder',async(req,res)=>{
    res.send(await Products.find({}).populate('order').exec());
});



router.get('/getorderhis/:id',async(req,res)=>{
    var ordId=req.params.id
    console.log(ordId)
    var userData=(await Products.findOne({'_id':ordId}).populate('order'));
    var catId=userData.categoryId
    var price=userData.price
    var name=userData.name
    var ordData=userData.createdAt
    var cat=(await Category.findOne({'_id':catId})).name
    console.log(catId,price,name,ordData,cat)
    res.render('email_body',{'name':name,'price':price,'date':ordData,'catID':catId,'name':cat})
        });












// router.get('/categories', async (req, res) => {
//     try {
//         const categories = await categories.find({})
//         res.send(categories)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.get('/categories/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const categories = await categories.findById(_id)

//         if (!categories) {
//             return res.status(404).send()
//         }

//         res.send(categories)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.patch('/categories/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name,isActive,timestamps']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const categories = await categories.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

//         if (!categories) {
//             return res.status(404).send()
//         }

//         res.send(categories)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.delete('/categories/:id', async (req, res) => {
//     try {
//         const categories = await categories.findByIdAndDelete(req.params.id)

//         if (!categories) {
//             return res.status(404).send()
//         }

//         res.send(categories)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

module.exports = router