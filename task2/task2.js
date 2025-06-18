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

// An implementation that rounds the result to two decimal places:
// function calculateTotalCostTwoDecimals(price, quantity, taxRate) {
//   return calculateTotalCost(price, quantity, taxRate).toFixed(2)
// }

// ____________________________________________________________________________
// Demo
// ____________________________________________________________________________

const demoPrice = 99.99
const demoQuantity = 3
const demoTaxRate = 0.0875 // NYC sales tax

function demoCalculateTotalCost(
  price = demoPrice,
  quantity = demoQuantity,
  taxRate = demoTaxRate
) {
  const result = calculateTotalCost(price, quantity, taxRate)
  const [arg0, arg1, arg2] = [price, quantity, taxRate]

  const output = `calculateTotalCost(${arg0}, ${arg1}, ${arg2}) returns ${result}.`
  console.log(output)
}

// function demoCalculateTotalCostTwoDecimals(
//   price = demoPrice,
//   quantity = demoQuantity,
//   taxRate = demoTaxRate
// ) {
//   const arg0 = price
//   const arg1 = quantity
//   const arg2 = taxRate
//   const result = calculateTotalCostTwoDecimals(price, quantity, taxRate)

//   const output = `calculateTotalCostTwoDecimals(${arg0}, ${arg1}, ${arg2}) returns ${result}.`
//   console.log(output)
// }

// Only call demoCalculateCost() if this file is executed directly
const url = import.meta.url
if (url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoCalculateTotalCost()
  // demoCalculateTotalCostTwoDecimals()
}
