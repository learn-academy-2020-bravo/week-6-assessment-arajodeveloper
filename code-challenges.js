// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

const nameCapitalizer = (arr) => {
  return arr.map((obj) => {
      obj.name = obj.name.split(' ').map((word) => {
          return word[0].toUpperCase() + word.slice(1)
      }).join(' ')
      return obj.name + ' is a ' + obj.occupation
  })
}
console.log(nameCapitalizer(people))





// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


const remainderBy3 = (array) => {
  let onlyNum = array.filter(value => typeof(value) === "number")
  return onlyNum.map(value => value % 3)
}

  console.log(remainderBy3(testingArray1));
  console.log(remainderBy3(testingArray2));



// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

const uniqueValue = (array1, array2) => {
  let newArr = array1.concat(array2)
  return Array.from(new Set(newArr))
}
console.log(uniqueValue(testingArray3, testingArray4));