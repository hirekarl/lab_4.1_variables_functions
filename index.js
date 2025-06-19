// ____________________________________________________________________________
// ----------------------------------------------------------------------------
// Lab 4.1: VARIABLES AND FUNCTIONS
// ____________________________________________________________________________

// Task 1: Flexible String Manipulation with Functions
// ____________________________________________________________________________

function capitalizeFirstLetter(word) {
  return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`
  // Another implementation that ensures the rest of the word is lowercase:
  // return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`
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

  return `The person is ${age} years old and ${employment}: they are ${status}.`
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
  return totalCost
}

// ____________________________________________________________________________
// ----------------------------------------------------------------------------
// Demo Code
// ____________________________________________________________________________

function demo() {

  // - - - - - - - - - - - - - - - Welcome - - - - - - - - - - - - - - - - - -

  console.log("")
  console.log(
    "\x1b[32m- - - - - - - - - - - - - - - - - - - - - - - - - -\x1b[0m"
  )
  console.log("          \x1b[33mWelcome, Tishana and Bryan\x1b[0m 💻")
  console.log(
    "\x1b[32m- - - - - - - - - - - - - - - - - - - - - - - - - -\x1b[0m"
  )
  console.log("")

  // - - - - - - - - - - - - - - - -Task 1 - - - - - - - - - - - - - - - - - -

  console.log(
    "\x1b[35m___________________________________________________\x1b[0m"
  )
  console.log(
    "\x1b[34mTask 1: Flexible String Manipulation with Functions\x1b[0m"
  )
  console.log("")

  function demoFormatFullName(firstName, lastName) {
    const result = JSON.stringify(formatFullName(firstName, lastName))
    const [arg0, arg1] = [JSON.stringify(firstName), JSON.stringify(lastName)]

    const output = `formatFullName(${arg0}, ${arg1})\n  \x1b[31m→\x1b[0m \x1b[32m${result}\x1b[0m`
    console.log(output)
  }

  demoFormatFullName("Edith", "Wharton")
  demoFormatFullName("darth", "vader")
  demoFormatFullName("Prince")

  // - - - - - - - - - - - - - - - -Task 2 - - - - - - - - - - - - - - - - - -

  console.log("")
  console.log(
    "\x1b[35m___________________________________________________\x1b[0m"
  )
  console.log(
    "\x1b[34mTask 2: Mathematical Operations with Multiple Parameters\x1b[0m"
  )
  console.log("")

  function demoCalculateTotalCost(price, quantity, taxRate) {
    const result = JSON.stringify(calculateTotalCost(price, quantity, taxRate))
    const [arg0, arg1, arg2] = [
      JSON.stringify(price),
      JSON.stringify(quantity),
      JSON.stringify(taxRate),
    ]

    const output = `calculateTotalCost(${arg0}, ${arg1}, ${arg2})\n  \x1b[31m→\x1b[0m \x1b[32m${result}\x1b[0m`
    console.log(output)
  }

  demoCalculateTotalCost(99.99, 3, 0.0875)
  demoCalculateTotalCost(5, 7.2, 0.25)
  demoCalculateTotalCost("six dollars", 1, 0.1)

  // - - - - - - - - - - - - - - - -Task 3 - - - - - - - - - - - - - - - - - -

  console.log("")
  console.log(
    "\x1b[35m___________________________________________________\x1b[0m"
  )
  console.log("\x1b[34mTask 3: Functions with Conditional Logic\x1b[0m")
  console.log("")

  function demoCheckEligibility(name, age, isEmployed) {
    let output = checkEligibility(age, isEmployed)
    output = `${output.replace("The person", name)}`

    console.log(output)
  }

  demoCheckEligibility("Matthew", 16, true)
  demoCheckEligibility("Mark", 17, false)
  demoCheckEligibility("Luke", 18, true)
  demoCheckEligibility("John", 19, false)
  demoCheckEligibility("Ringo", 20, true)

  // - - - - - - - - - - - - - - - -Task 4 - - - - - - - - - - - - - - - - - -

  console.log("")
  console.log(
    "\x1b[35m___________________________________________________\x1b[0m"
  )
  console.log("\x1b[34mTask 4: Refactoring for Reusability\x1b[0m")
  console.log("")

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

    const output = `calculateTotalCostRefactor(${arg0}, ${arg1}, ${arg2}, ${arg3})\n  \x1b[31m→\x1b[0m \x1b[32m${result}\x1b[0m`
    console.log(output)
  }

  demoCalculateTotalCostRefactor(99.99, 3, 0.0875, 5)
  demoCalculateTotalCostRefactor(5, 7.2, 0.25)
  demoCalculateTotalCostRefactor(5, 7.2, 0.25, 7)
  demoCalculateTotalCostRefactor("six dollars", 1, 0.1)

  console.log("")
  console.log(
    "\x1b[32m- - - - - - - - - - - - - - - - - - - - - - - - - -\x1b[0m"
  )
  console.log("                \x1b[33mHave a nice day\x1b[0m 💻")
  console.log(
    "\x1b[32m- - - - - - - - - - - - - - - - - - - - - - - - - -\x1b[0m"
  )
  console.log("")
}

demo()
