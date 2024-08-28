"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'John Doe',
    age: 25,
    email: 'johndoe@example.com',
    isPaid: false,
};
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
createUser({ name: 'John', isPaid: false });
createUser({
    name: 'John',
    isPaid: false,
    // email:'John@example.COM' //this will cause errors
});
// but what if we just pass an object as a variable with the values it is not supposed to accept as below:
createUser(User); //in this we are passing the email and it's not giving error anymore. this is a wierd behaviour
var createCourse = function () {
    // now in this function it states that we will be returning object
    return {
        title: 'TypeScript Basics',
        description: 'Learn TypeScript in 10 hours',
        price: 19.99,
        author: 'John Doe',
        isPublished: true, // this will be the default value
        // notReal: false // this will cause errors
    };
};
// the above is a our defined type which we can use in our functions and other variable declarations as below
function createUser1(user) {
    //now this function is defined in such a way that only the type of User type can be passed as an argument to the function
    //And we have defined that it should only be returning a User type only.
    return user;
}
createUser1({ name: 'John', email: '', isActive: false, id: '' });
