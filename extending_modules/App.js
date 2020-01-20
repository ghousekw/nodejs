// extending the NodeTutorial module.
var localTutor=require('./NodeTutorial');

// we are accessing NodeTutorial and display the string Node Tutorial in console.
localTutor.NodeTutorial();

// we are extending Tutorial.js module and exposed a function pTutor, It also calls the tutorial module in the Tutorial.js module and the text Guru Tutorial will be displayed in console.
localTutor.NodeTutorial.pTutor();