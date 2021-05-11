const http = require('http');
const hostname = 'localhost';
const port = 3000;
const fs = require('fs');
const path = require('path');
const server = http.createServer((req,res)=>{
    console.log("req url: "+ req.url+" http method: "+req.method);
    if(req.method=="GET")
    {
    var fileUrl;
    if(req.url=='/')
    fileUrl='/index.html';
    else
    fileUrl=req.url;

    var filePath = path.resolve('./public'+fileUrl);
    const fileExt = path.extname(filePath);

    if(fileExt == '.html'){
        fs.exists(filePath, (present) => {
            if(!present)
            {
                res.statusCode = 404;
                res.setHeader('Content-Type','text/html');
                res.end('<html><body><h1>Error 404: ' + fileUrl + 
                      ' not found</h1></body></html>');
                      return;
            }
            res.statusCode = 200; //which means everything is ok
            res.setHeader('Content-Type', 'text/html');
            fs.createReadStream(filePath).pipe(res);
            //this will include in body of response
        })
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end('<html><body><h1>Error 404: ' + fileUrl + 
                      ' not Html file</h1></body></html>');
                      return;
    }
    
    }
    else{
        req.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>HTTP ERROR 404:'+ req.method +' not supported </h1></body></html>');
    }
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
    //we have used backquotes not front cout because of varible in ${}
})