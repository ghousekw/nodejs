// 'exports' modules is used so that whatever function os defined in this file can be available in other modules in Node.js
var exports=module.exports={};
// we are creating a function called tutorial which can be used in other nodejs modules
exports.tutorial=function(){
    // displaying guru tutorial in console
    console.log('Guru tutorial');
}