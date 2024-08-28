"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num + 'w'; this will not throw error as we haven't described the type of num
    return num + 2;
}
addTwo(5);
// now in this there is no type check for the parameter the fujnction is accepting till now so we can do anything with this as if I have passed 2 to it and then done 2+'2' then it would return 22 without any error so to address that we will be doing below things:
function addTwo1(num) {
    // num = num + 'w'; this will throw error
    // return num + 2; but instead of doing this I can styill return another type value as below:
    return 'This is a string returning but a number return is expected'; // so to address look below function
}
console.log(addTwo1(5));
function check(num) {
    if (typeof num === 'number')
        return true;
    return false;
    // now in this function we have explicitely told the function to only return the type booolean
}
console.log(check(6));
var getUser = function (name, email, paidFees) {
    // in this function we have passed a default parameter which has a default value if the user haven't provided anything
    if (paidFees === void 0) { paidFees = false; }
    return { name: name, email: email, paidFees: paidFees };
};
console.log(getUser('subham', 'sk@g.com'));
