// ____________________________________________________________________________
//     __          __    __ __   ___ __ __
//    / /   ____ _/ /_  / // /  <  // // /   |\__/,|   (`\
//   / /   / __ `/ __ \/ // /_  / // // /_   |_ _  |.--.) )
//  / /___/ /_/ / /_/ /__  __/ / //__  __/   ( T   )     /
// /_____/\__,_/_.___/  /_/ (_)_/(_)/_/     (((^_(((/(((_/
//
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
//
// Refactoring for Reusability
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
//
// 1. Refactor the `calculateTotalCost` function from Task 2 to include an
//    optional `discount` parameter. If the discount is provided, the function
//    should subtract the discount from the total cost before applying tax.
//
// 2. If no discount is provided, calculate the total cost as before.

// ____________________________________________________________________________
// Main
// ____________________________________________________________________________

const DEFAULT_DISCOUNT = 0

function calculateTotalCostRefactor(
  price,
  quantity,
  taxRate,
  discount = DEFAULT_DISCOUNT
) {
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number" ||
    typeof discount !== "number"
  ) {
    return "Invalid input."
  }

  const totalCost = (price * quantity - discount) * (1 + taxRate)
  return totalCost
}

// ____________________________________________________________________________
// Demo
// ____________________________________________________________________________

function demoCalculateTotalCostRefactor(
  price,
  quantity,
  taxRate,
  discount = DEFAULT_DISCOUNT
) {
  const result = JSON.stringify(
    calculateTotalCostRefactor(price, quantity, taxRate, discount)
  )
  const [arg0, arg1, arg2, arg3] = [
    JSON.stringify(price),
    JSON.stringify(quantity),
    JSON.stringify(taxRate),
    JSON.stringify(discount),
  ]

  const output = `calculateTotalCostRefactor(${arg0}, ${arg1}, ${arg2}, ${arg3}) → ${result}`
  console.log(output)
}

demoCalculateTotalCostRefactor(99.99, 3, 0.0875, 5)
demoCalculateTotalCostRefactor(5, 7.2, 0.25)
demoCalculateTotalCostRefactor(5, 7.2, 0.25, 7)
demoCalculateTotalCostRefactor("six dollars", 1, 0.1)

export { calculateTotalCostRefactor as calculateTotalCost }
