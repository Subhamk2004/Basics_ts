// we can also declare the types of elemets in array as we used to do in c++
const superheroes: number[] = [];

superheroes.push(1);
// superheroes.push('2'); // this will give error in TS as we are passing a string in array of numbers


// but TS gives us more flexibility to declare arrays of our own types as below:
type User = {
    id: number,
    name: string,
    email: string,
}

const allUsers: User[] = [];
// allUsers.push('1'); // this will give error in TS as we are passing a string in array of type User
allUsers.push({id: 1, email: '', name: ''})


const MlModels: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// The above is an array of arrays of type numbers