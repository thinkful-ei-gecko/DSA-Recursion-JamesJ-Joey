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

// exercise 1: countSheep(3)

// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(base, exponent) {
  if (exponent < 0) {
    console.log('exponent should be >= 0')
  } else if (exponent > 0) {

    // 2^4 === powerCalculator(2, 4)
    // 2 * 2^3 === 2 * powerCalucator(2, 3)
    return base * powerCalculator(base, (exponent - 1))
  } else {
    return 1
  }
}

// console.log('exercise 2', powerCalculator(3, 0))
