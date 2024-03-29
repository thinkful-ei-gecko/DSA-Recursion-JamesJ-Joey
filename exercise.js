// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

function countSheep(number) {
  if (number === 0) {
    console.log('All sheep jumped over the fence')
  } else {
    console.log(`${number}: Another sheep jumps over the fence`)
    countSheep(number - 1)
  }
}

// countSheep(3)

// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(base, exponent) {
  if (exponent < 0) {
    console.log('exponent should be >= 0')
  } else if (exponent > 0) {
    // 2^4 === powerCalculator(2, 4)
    // 2 * 2^3 === 2 * powerCalucator(2, 3)
    return base * powerCalculator(base, exponent - 1)
  } else {
    return 1
  }
}

// console.log('exercise 2', powerCalculator(3, 0))

function reverseString(string) {
  if (string.length === 0) {
    return ' '
  } else {
    return (
      string[string.length - 1] +
      reverseString(string.substring(0, string.length - 1))
    )
  }
}
// console.log(reverseString('race car'));

function nthNumber(number) {
  if (number < 0) {
    return 'pick a better number'
  }
  if (number > 0) {
    return number + nthNumber(number - 1)
  } else {
    return number
  }
}
// console.log(nthNumber(-1));

// Write a recursive function that split a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

function splitStr(string, separator) {
  // take string and grab all chartacters that are not the separator
  // if it is the separator, make the previous items into one part of array
  // else we iterate through the rest of the string
  let index = string.indexOf(separator)
  // '02/02/2020'

  if (index === -1) {
    return [string]
  }
  return [string.slice(0, index)].concat(
    splitStr(string.slice(index + separator.length), separator)
  )
}

// console.log(splitStr('02/02/2020', '/'))

function fibonacci(num) {
  // fibonacci(7)
  // 1, 1, 2, 3, 5, 8, 13
  if (num <= 0) {
    return 0
  }
  if (num < 2) {
    return 1
  }

  return fibonacci(num - 1) + fibonacci(num - 2)
}
function finalFib(num) {
  for (let i = 1; i <= num; i++) {
    console.log(fibonacci(i))
  }
}

// finalFib(7);

function factorial(num) {
  if (num === 0) {
    return 1
  }
  return num * factorial(num - 1)
}
// console.log(factorial(5));
let mySmallMaze = [[' ', ' ', ' '], [' ', '*', ' '], [' ', ' ', 'e']]

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
]

function mazeSolver(
  maze,
  currentPosition = 0,
  row,
  column,
  dir = '',
  path = ''
) {
  if (row < 0 || column < 0) {
    return
  }

  if (row >= maze.length) {
    return
  }

  if (column >= maze[0].length) {
    return
  }

  path += dir // store current spot in our path
  currentPosition++

  if (maze[row][column] === 'e') {
    console.log('Success!', path)
    return
  }

  // check that current spot is legal and mark it if it is, update position
  // explore possible positions via recursion
  if (maze[row][column] === ' ') {
    maze[row][column] = 's'
    mazeSolver(maze, currentPosition, row + 1, column, 'd', path)
    mazeSolver(maze, currentPosition, row, column - 1, 'l', path)
    mazeSolver(maze, currentPosition, row, column + 1, 'r', path)
    mazeSolver(maze, currentPosition, row - 1, column, 'u', path)
    maze[row][column] = ' ' // unlock the occupied cell for future iterations
  }
}

// mazeSolver(mySmallMaze, 0, 0, 0)
// mazeSolver(maze, 0, 0, 0)

function anagrams(prefix, string) {
  if (string.length <= 1) {
    console.log(prefix + string)
  } else {
    for (let i = 0; i < string.length; i++) {
      let currentLetter = string.substring(i, i + 1)
      let previousLetters = string.substring(0, i)
      let afterLetters = string.substring(i + 1)
      anagrams(prefix + currentLetter, previousLetters + afterLetters)
    }
  }
}

function printAnagram(word) {
  anagrams(' ', word)
}

printAnagram('east')
