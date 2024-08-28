// if we want only some constant that we are notplanning to change anytime in the code then we can do as below, this is where enums are useful:
enum SeatChoice {
    AISLE = 10,
    MIDDLE ,
    WINDOW  = 32
}
// by default these above have value in the incre4asing order starting from 0 
// as AISLE will be 0 and MIDDLE will be 1, Window will be 2 etc...
// but we can set the value as we want and the subsequent value will change accordingly
//it's not necessary that theses have to be numbers only , these can be stringgs also but then we have to initialise all of them as some strings

const skrSeat = SeatChoice.AISLE
