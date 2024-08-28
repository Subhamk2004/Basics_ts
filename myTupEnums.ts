const user: (string | number)[] = [1, "skr"] // in this the data can be in any order but only of string or numbe but what if we want the dat to be in a very specific order like first number then string then number then string, then we do as below:
let tUser: [string, number, boolean]
tUser = ["hc", 131, true] // this can be only in this format only, we can't change the number of elements in this or the order
let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string] // here we have created a type of array which only accepts two inputs of type number and string

const newUser: User = [122, 'skr']
newUser[0] = 234;
// newUser[0] = 'kjshgdf' // this will give errors as we are not allowed to assign a string to a type number


export {}