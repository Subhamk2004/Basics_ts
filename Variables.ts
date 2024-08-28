let greetings: string = 'Subham Rahar'; // This is the syntax of declaring types or variables in TS
// greetings = 7; // this will give error in TS but not in js;
greetings = 'Subham Kumar Rahar';
console.log(greetings);

// number
let userId: number = 2248;

userId.toFixed(2); // by specifying the type the IDE only suggest the methods that are available for that type 

// boolean
let isLoggedIn: boolean = false;

// in js everything is just a variable for it and it;s tyoe can be changed anytime .

// in the above examples we have overused the TS as we have declared the number directly after we have said that it's a number for ex:

let newNum: number = 124.54;
let newNum1 = 153;
// in both of the above example TS automatically defines both of the variables as of number, as we are directly assigning the value number to a variable so TS understands that it's a number and locks the type number to that variable even if we have not explicitely told that it's a number


let a: string;

function getA() {
    return 'SKR';
}

a = getA(); // now in this case TS don't kow what will be the output of the function so it assign a the type of any;
// So in these types of cases we have to define the variable type just after it's declaration, so now I am defining it's type

// so (any) is just an escape to avoid type checking


export {}