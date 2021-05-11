var rect = require('./rectangle');
var circ = require('./circle');
//include modeule from current directory

function solveRect(l,b){
    console.log("solving for rectangle with l = "+l +" b = "+ b)

    if( l<=0||b<=0)
    {
        console.log("rectangle dimenstions should be greator then 0");
    }
    else{
        console.log("area of rectangle = "+rect.area(l,b));
        console.log("perimeter of rectangle = "+rect.perimeter(l,b));
    }
}

function solveCircle(r)
{
    console.log("circle radius r = "+r);
    circ(r,(err,circle)=>{
        if(err)
        {
            console.log("ERROR: ",err.message);
        }
        else{
            console.log("circle with radius = "+r+" Area = "+circle.area + " perimeter = "+circle.perimeter);
        }
    });
    console.log("this will be printed before circle mesuration");

}

function callback(){

    console.log("callback function called from simple_func");
}

function call_callback( a, ops)
{
    if(a==0)
    {
        console.log("will not call callback function")
    }
    else{
        ops();
    }
}

function simple_fun(i)
{
    call_callback(i,callback);
}

solveRect(0,5);
solveRect(2,5);
solveRect(1,1);
solveRect();

solveCircle(-1);
solveCircle(3);
solveCircle(1);

simple_fun(1);