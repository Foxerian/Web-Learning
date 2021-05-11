function sayHello(name)
{
	console.log("Hello "+name);
}

sayHello("mudit");

const object = require("./export");
object.func();

const fun = require("./export_func");
fun();