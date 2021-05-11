module.exports = (r,callback) => {
if(r<=0)
{
    setTimeout(()=>callback(new Error("circle with 0 or negative radius"),null),2000);
    //call callback after 2 seconds
    //callback funciton will produce error if r is less then 0.
}
else{
    setTimeout(()=>callback(null,{ perimeter: 2*3.14*r, area: 3.14*r*r}),2000);
    //callback second argument is a javascript object and preimeter and area are two properties.
}
}