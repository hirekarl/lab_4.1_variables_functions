// ____________________________________________________________________________
// Task 1
// ____________________________________________________________________________

function capitalizeFirstLetter(word) {
  return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`
}

function isValidInput(param0, param1) {
  return param0 && param0 !== "" && param1 && param1 !== ""
}

function formatFullName(firstName, lastName) {
  if (!isValidInput(firstName, lastName)) {
    return "Invalid name input."
  }

  const capitalizedFirstName = capitalizeFirstLetter(firstName)
  const capitalizedLastName = capitalizeFirstLetter(lastName)

  return `${capitalizedLastName}, ${capitalizedFirstName}`
}

// ____________________________________________________________________________
// Task 2
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