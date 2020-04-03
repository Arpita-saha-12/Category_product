const express = require('express')
require('./src/db/mongoose')

const validator = require('validator')

const userRouter = require('./src/routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})




// app.get('/posts',authenticate, async (req,res) => {
//     //const _ispublished = req.query.published;
//     const match = {}

//     if(req.query.Order){
//         match.Order = req.query.Order === 'true'
//     }
//     try {
//         await req.user.populate({
//             path:'Order',
//             match,
//             options:{
//                 limit: parseInt(req.query.limit),
//                 skip: parseInt(req.query.skip)
//             }
//         }).execPopulate()
//         res.send(req.user.Order)
//     } catch (error) {
//         res.status(500).send()
//     }
// });

// app.listen(2000);







/*app.get('/populate', async (req, res) => {
    const match = {}
    const sort = {}

    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    };

    if (req.query.sortBy && req.query.OrderBy) {
        sort[req.query.sortBy] = req.query.OrderBy === 'desc' ? -1 : 1
    };

    try {
        await req.user.populate({
            path: 'Order',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send()
    };
});
app.listen(3000);






/*app.get('/users',async(req,res) => {
    const pageNo = parseInt(req.query.pageNo)
    const size = parseInt(req.query.size)
    const query = {}
    if(pageNo < 0 || pageNo === 0) {
          response = {"error" : true,"message" : "invalid page number, should start with 1"};
          return res.json(response)
    }
    query.skip = size * (pageNo - 1)
    query.limit = size
    // Find some documents
         res.send(Products.find({}).populate('products'),function(err,data)  {
          // Mongo command to fetch all data from collection.
              if(err) {
                  response = {"error" : true,"message" : "Error fetching data"};
              } else {
                  response = {"error" : false,"message" : data};
              }
              res.json(response);
          });
  })
  
  app.listen(3000);
*/
