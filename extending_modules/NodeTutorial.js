// we are using the require function to extend existing module file Tutorial.js
var Tutor = require('./Tutorial');

// we are creating a function NodeTutorial 
exports.NodeTutorial=function(){

    //display Node Tutorial in console
    console.log("Node Tutorial");
    
    // we are sending the string Guru Tutorial from Tutorial function in base module Tutorial.js
    function pTutor()
    {
        var pTutor=Tutor;
        pTutor.tutorial;
    }
}