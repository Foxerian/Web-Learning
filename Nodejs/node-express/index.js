const express =require('express');
const http =require('http');

const hostname = 'localhost';
const port = 3000;

//now setting servers using app.
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
app.use(morgan('dev'));
//dev because it dev branch {morgan}
app.use(bodyParser.json());
app.use('/dishes',dishRouter);

/*app.all('/dishes',(req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
    //this next means first this block will be called the for upcomming req
    //it will look for belos supported functions with updated res and req object.
});

app.get('/dishes',(req,res,next) =>{
    res.end('will send all the dishes to you');
});

app.post('/dishes',(req,res,next) =>{
    res.end('will add the dish: '+req.body.name+' with details: '+req.body.description);
});

app.put('/dishes',(req,res,next) =>{
    res.statusCode = 403;
    res.end('put operation not supported');
});

app.delete('/dishes',(req,res,next) =>{
    res.end('deleting all dishes');
});
*/

/*app.get('/dishes/:dishId',(req,res,next) =>{
    res.end('will send '+ req.params.dishId+' all the dish to you');
});

app.post('/dishes/:dishId',(req,res,next) =>{
    res.end('post not supported on dish '+req.params.dishId);
});

app.put('/dishes/:dishId',(req,res,next) =>{
    res.write('updating the dish: '+req.params.dishId);
    res.end('will update the dish:' +req.body.name+' with details: '+req.body.description);
});
//above expect json in body as this {"name": "test", "description": "test descroption"}

app.delete('/dishes/:dishId',(req,res,next) =>{
    res.end('deleting dish '+req.params.dishId);
});*/


app.use(express.static(__dirname+'/public'));
//use this to get static html pages
//__dirname is root for our application

app.use((req,res,nex)=>{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an express server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})