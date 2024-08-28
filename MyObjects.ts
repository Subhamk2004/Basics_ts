const User = {
    name: 'John Doe',
    age: 25,
    email: 'johndoe@example.com',
    isPaid: false,
}

let createUser  = ({name: string, isPaid: boolean}) => {

}
createUser({name: 'John', isPaid:false});
createUser({
    name: 'John',
    isPaid: false,
    // email:'John@example.COM' //this will cause errors
})
// but what if we just pass an object as a variable with the values it is not supposed to accept as below:
createUser(User); //in this we are passing the email and it's not giving error anymore. this is a wierd behaviour


let createCourse = (): {
    title: string,
    description: string,
    price: number,
    author: string,
    isPublished: boolean
    // this is just for type checking and not for default value initialization, the default value is defined in those () brackets

    // this is just stating that we will be returning object in this format
} => {
    // now in this function it states that we will be returning object
    return {
        title: 'TypeScript Basics',
        description: 'Learn TypeScript in 10 hours',
        price: 19.99,
        author: 'John Doe',
        isPublished:true, // this will be the default value
        // notReal: false // this will cause errors
    }
}


type User = {
    name: string,
    email: string,
    isActive: boolean,
    readonly id: string, // now no one can change it, we can just only read it's value
    // it thiw would be instead an array of ids then we are allowed toonly push new ids to it and not update or delete any id
    creditCard?: number, // that (?) means that it is optional to pass the credit card number 
}
// the above is a our defined type which we can use in our functions and other variable declarations as below
function createUser1(user: User):User {
    //now this function is defined in such a way that only the type of User type can be passed as an argument to the function

    //And we have defined that it should only be returning a User type only.

    return user;
}
createUser1({name: 'John', email: '', isActive: false , id: ''})
//check the documentation about this on ts docs




export{} // will talk about this export later