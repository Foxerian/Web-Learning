const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
    //this next means first this block will be called the for upcomming req
    //it will look for belos supported functions with updated res and req object.
})
.get((req,res,next) =>{
    res.end('will send all the dishes to you');
})
.post((req,res,next) =>{
    res.end('will add the dish: '+req.body.name+' with details: '+req.body.description);
})
.put((req,res,next) =>{
    res.statusCode = 403;
    res.end('put operation not supported');
})
.delete((req,res,next) =>{
    res.end('deleting all dishes');
});

dishRouter.route('/:dishId')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
    //this next means first this block will be called the for upcomming req
    //it will look for belos supported functions with updated res and req object.
})
.get((req,res,next) =>{
    res.end('will send '+ req.params.dishId+' all the dish to you');
})
.post((req,res,next) =>{
    res.end('post not supported on dish '+req.params.dishId);
})

.put((req,res,next) =>{
    res.write('updating the dish: '+req.params.dishId);
    res.end('will update the dish:' +req.body.name+' with details: '+req.body.description);
})
//above expect json in body as this {"name": "test", "description": "test descroption"}

.delete((req,res,next) =>{
    res.end('deleting dish '+req.params.dishId);
});
module.exports = dishRouter;