
const controller = require('./Controller.js');

const testImport1 = new controller;
console.log(testImport1.getAtempts());
testImport1.switchFinished();
console.log(testImport1.finished);
testImport1.switchFinished();
console.log(testImport1.finished);
