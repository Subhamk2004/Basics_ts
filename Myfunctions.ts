function addTwo(num) {
    // num + 'w'; this will not throw error as we haven't described the type of num
    return num + 2;
    // now in this there is no type check for the parameter the fujnction is accepting till now so we can do anything with this as if I have passed 2 to it and then done 2+'2' then it would return 22 without any error so to address that we will be doing below things:
}
console.log(addTwo(5));

let getUser = ( name: string, email: string, paidFees: boolean = false ) => {
    // in this function we have passed a default parameter which has a default value if the user haven't provided anything

    return { name, email, paidFees}
}
console.log(getUser('subham', 'sk@g.com'));

function addTwo1(num: number) {
    // num = num + 'w'; this will throw error
    // return num + 2; but instead of doing this I can styill return another type value as below:
    return 'This is a string returning but a number return is expected'; // so to address look below function
}
console.log(addTwo1(5));

function check( num: number): boolean{
    if(typeof num === 'number') return true;
    return false; 
    // return num; thiw will cause error now
    // now in this function we have explicitely told the function to only return the type booolean

    // but what if there can be more than one type of value returning as in below:
}
console.log(check(6));

// const twoReturns = (s: string):string => {
//     if(s.length > 5) return true;
//     else return 'Not greater than 5'
// }

let heroes = ['thor', 'spiderman', 'ironman']

heroes.map((hero):string =>{
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
    // return 1; this will cause errors as this function should not return anything
}
function handleError(errmsg: string): never{
    throw new Error(errmsg);
    // this never returns anything, it is only for error handling
}


export{}