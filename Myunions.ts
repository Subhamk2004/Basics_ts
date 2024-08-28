let score: number | string = 2;
score = 34;
score = 'score';
// By using that union we are now allowed to use both types string and number

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let subham: User | Admin = {name: "subham", id: 334} // now subham can be either user or admin

subham = {username: "subham", id:24}

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    // id.toLowerCase() // this will cause errors as now TS is terating it as both number and string and the method we are trying is not applicable on number type, so to do this type of operation we do as below: 
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const data2: string[] = ["1", "2", "3"]
const data3: string[] | number[] | boolean[] = ["1", "2"] // this states that the array can be either of only string or only numbers or only boolean
// for a misxup of different types we can do as below
const data4: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" // this is not allowed