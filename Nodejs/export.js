var name = "mudit";

function func()
{
	console.log("exported method called");
}

module.exports.endPoint=name;
module.exports.func = func;