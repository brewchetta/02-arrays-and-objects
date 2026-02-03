// ARRAYS //

// data structure --> it contains and organize data

const myNewArray = []

myNewArray.push("Item 1")
myNewArray.push("Item 2")
myNewArray.push("Item 3")

myNewArray[1] // "Item 2"

myNewArray[1] = "new string"

myNewArray.pop() // removes the last item

myNewArray.unshift("Item 0") // adds to the beginning of the array
myNewArray.shift() // removes the first item

// methods --> a function that is called on a javascript object or entity using dot notation

"I am downcased".toUpperCase()

// reassignment WILL NOT WORK WITH CONSTANTS!!!
// myNewArray = ["Item 99", "Item 100", "Item 101"]

const dogNames = [
    "Brandy",
    "Neville",
    "Doughnut",
    "Theodore"
]

// callback function
// someFunction is the callback function!
// it gets passed as a parameter
function forEach( array, someFunction ) {
    for (let i = 0; i < array.length; i++) {
        someFunction( array[i] )
    }
}

function sayName(doggoName) {
    console.log(doggoName + " is a good doggo")
}

function sayDoggoNames1() {
    // i stands for index
    for (let i = 0; i < dogNames.length; i++) {
        sayName(dogNames[i])
    }
}

function sayDoggoNames2() {
    for (dName of dogNames) {
        sayName(dName)
    }
}

function sayDoggoNames3() {
    dogNames.forEach(sayName)
}

// EXERCISES

// 1. Create a new array of sodas - make sure there are at least 2 sodas in the array.

const sodasArray = [
    "Dr Pepper",
    "Coca Cola",
    "Cream Soda",
    "Root Beer",
    "Cherry Cola",
    "Mountain Dew"
]

// 2. Use a for loop to console.log each soda.toUpperCase.

for (let i = 0; i < sodasArray.length; i++) {
    // console.log( sodasArray[i].toUpperCase() )
}

for (soda of sodasArray) {
    console.log( soda.toUpperCase() )
}

// 3. Use a .forEach to iterate through the sodas and print out "{soda} is super fizzy"

function fizz(soda) {
    console.log(`${soda} is super fizzy`)
}

sodasArray.forEach(fizz)

// 4. Use any loop of your choice and if the soda has the word "cola" inside of it, console.log that soda name.

function printColaName(soda) {
    if ( soda.toLowerCase().includes("cola") ) {
        console.log(soda)
    }
}

sodasArray.forEach( printColaName )








const groceries= ["banana", "apple", "banana", "pasta", "pasta", "marinara", "pasta", "alfredo", "chicken", "banana", "cereal"]



















const clients = [
  "john smith",
	"jane smith",
	"john doe",
	"jane doe",
	"john carpenter",
	"jane fonda"
]

// 1. Write a function `printAllNames` which uses a .forEach to console.log each of the client names 

// 2. Write a function `filterJohns()` which uses .filter to return an array of all `clients` with the name "John"

// 3. Write a function `findJane()` which uses .find to return the first person with a name of "Jane" in `clients`

// 4. Write a function `secondHalf()` which uses .slice to return a new array of only the second half of `clients`

// 5. Write a function `capitalizedNames()` which returns a new array based on the `clients` array with every first name properly capitalized

// BONUS - Both the first and last names are properly capitalized when `capitalizedNames()` is called 

// 6. Write a function `sortNames()` which alphabetically sorts the names in `clients`

// BONUS - `sortNames()` does not alter the original array but instead creates a copy of the array and returns a sorted copy