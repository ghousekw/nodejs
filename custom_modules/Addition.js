// 'exports' modules is used so that whatever function os defined in this file can be available in other modules in Node.js
var exports = module.exports={};
// defining a AddNumber function with 2 parameters a & b. 
// AddNumber function is added to module exports to make the function as a public function that can be accessed by other application modules.
exports.AddNumber=function(a,b){
    return a+b;
};