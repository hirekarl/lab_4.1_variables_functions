// ____________________________________________________________________________
// ----------------------------------------------------------------------------
// Lab 4.1: VARIABLES AND FUNCTIONS
// ____________________________________________________________________________

// Task 1: Flexible String Manipulation with Functions
// ____________________________________________________________________________

function capitalizeFirstLetter(word) {
  // Alternate implementation that ensures the rest of the word is lowercase:
  // return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`
  return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`
}

function isValidInput(input0, input1) {
  return input0 && input0 !== "" && input1 && input1 !== ""
}

function formatFullName(firstName, lastName) {
  if (!isValidInput(firstName, lastName)) {
    return "Invalid name input."
  }

  const capitalizedFirstName = capitalizeFirstLetter(firstName)
  const capitalizedLastName = capitalizeFirstLetter(lastName)

  return `${capitalizedLastName}, ${capitalizedFirstName}`
}

// Task 2: Mathematical Operations with Multiple Parameters
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

  // Alternate implementation that returns totalCost with two decimal places:
  // return totalCost.toFixed(2)
  return totalCost
}

// Task 3: Functions with Conditional Logic
// ____________________________________________________________________________

function checkEligibility(age, isEmployed) {
  let employment = isEmployed ? "employed" : "unemployed"

  let status

  if (age <= 18) {
    status = "ineligible"
  } else {
    status = "eligible"
    if (!isEmployed) {
      status = `conditionally ${status}`
    }
  }

  return `The person is ${age} years old and ${employment}: ${status}.`
}

// Task 4: Refactoring for Reusability
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

  // Alternate implementation that returns totalCost with two decimal places:
  // return totalCost.toFixed(2)
  return totalCost
}

// ____________________________________________________________________________
// ----------------------------------------------------------------------------
// Demo
// ____________________________________________________________________________

demo()

import { red, green } from "./utilities/colorize.js"
import { welcome, taskHeader, goodbye } from "./utilities/decorations.js"

function demo() {
  function demoFunction(func, ...args) {
    const funcName = func.name
    const joinedArgs = args.map((arg) => JSON.stringify(arg)).join(", ")
    const result = JSON.stringify(func(...args))
    return `${funcName}(${joinedArgs})\n  ${red("→")} ${green(result)}`
  }

  function demoFormatFullName(firstName, lastName) {
    return demoFunction(formatFullName, firstName, lastName)
  }

  function demoCalculateTotalCost(price, quantity, taxRate) {
    return demoFunction(calculateTotalCost, price, quantity, taxRate)
  }

  function demoCheckEligibility(age, isEmployed) {
    return demoFunction(checkEligibility, age, isEmployed)
  }

  function demoCalculateTotalCostRefactor(price, cost, taxRate, discount) {
    return demoFunction(
      calculateTotalCostRefactor,
      price,
      cost,
      taxRate,
      discount
    )
  }

  console.log(
    welcome("Tishana & Bryan")
  )

  console.log(
    taskHeader("Task 1: Flexible String Manipulation with Functions")
  )

  console.log(demoFormatFullName("Edith", "Wharton"))
  console.log(demoFormatFullName("darth", "vader"))
  console.log(demoFormatFullName("Prince"))

  console.log(
    taskHeader("Task 2: Mathematical Operations with Multiple Parameters")
  )

  console.log(demoCalculateTotalCost(99.99, 3, 0.0875))
  console.log(demoCalculateTotalCost(5, 7.2, 0.25))
  console.log(demoCalculateTotalCost("six dollars", 1, 0.1))

  console.log(
    taskHeader("Task 3: Functions with Conditional Logic")
  )

  console.log(demoCheckEligibility(16, true))
  console.log(demoCheckEligibility(17, false))
  console.log(demoCheckEligibility(18, true))
  console.log(demoCheckEligibility(19, false))
  console.log(demoCheckEligibility(20, true))

  console.log(
    taskHeader("Task 4: Refactoring for Reusability")
  )

  console.log(demoCalculateTotalCostRefactor(99.99, 3, 0.0875, 5))
  console.log(demoCalculateTotalCostRefactor(5, 7.2, 0.25))
  console.log(demoCalculateTotalCostRefactor(5, 7.2, 0.25, 7))
  console.log(demoCalculateTotalCostRefactor("six dollars", 1, 0.1))

  console.log(
    goodbye()
  )
  console.log("")
}
