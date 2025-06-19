// ____________________________________________________________________________
//     __          __    __ __   ___  ___
//    / /   ____ _/ /_  / // /  <  / |__ \    __      _
//   / /   / __ `/ __ \/ // /_  / /  __/ /  o'')}____//
//  / /___/ /_/ / /_/ /__  __/ / /_ / __/    `_/      )
// /_____/\__,_/_.___/  /_/ (_)_/(_)____/    (_(_/-(_/
//
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
//
// Mathematical Operations with Multiple Parameters
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
//
// 1. Write a function called `calculateTotalCost` that takes three parameters:
//    `price`, `quantity`, and `taxRate`.
//
// 2. The function should calculate the total cost of items, including tax.
//    Use the formula: `totalCost = (price * quantity) * (1 + taxRate)`.
//
// 3. Ensure that price, quantity, and taxRate are all valid numbers. If any
//    are invalid, return a string: "Invalid input."

// ____________________________________________________________________________
// Main
// ____________________________________________________________________________

function calculateTotalCost(price, quantity, taxRate) {
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number"
  ) {
    return "Invalid input."
  }

  const totalCost = price * quantity * (1 + taxRate)
  return totalCost
}

// ____________________________________________________________________________
// Demo
// ____________________________________________________________________________

function demoCalculateTotalCost(price, quantity, taxRate) {
  const result =  JSON.stringify(calculateTotalCost(price, quantity, taxRate))
  const [arg0, arg1, arg2] = [price, quantity, taxRate]

  const output = `calculateTotalCost(${arg0}, ${arg1}, ${arg2}) returns ${result}.`
  console.log(output)
}

demoCalculateTotalCost(99.99, 3, 0.0875)
demoCalculateTotalCost(5, 7.2, 0.25)
demoCalculateTotalCost("six dollars", 1, 0.1)

export { calculateTotalCost }
