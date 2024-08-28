"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = 'Subham Rahar'; // This is the syntax of declaring types or variables in TS
// greetings = 7; // this will give error in TS but not in js;
greetings = 'Subham Kumar Rahar';
console.log(greetings);
// number
var userId = 2248;
userId.toFixed(2); // by specifying the type the IDE only suggest the methods that are available for that type 
// boolean
var isLoggedIn = false;
// in js everything is just a variable for it and it;s tyoe can be changed anytime .
// in the above examples we have overused the TS as we have declared the number directly after we have said that it's a number for ex:
var newNum = 124.54;
var newNum1 = 153;
