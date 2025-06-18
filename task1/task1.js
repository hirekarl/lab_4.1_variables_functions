// ____________________________________________________________________________
//     __          __    __ __   ___  ___
//    / /   ____ _/ /_  / // /  <  / <  /
//   / /   / __ `/ __ \/ // /_  / /  / /
//  / /___/ /_/ / /_/ /__  __/ / /_ / /
// /_____/\__,_/_.___/  /_/ (_)_/(_)_/
//
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
//
// Flexible String Manipulation with Functions
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
//
// 1. Create a function called `formatFullName` that takes two parameters:
//    `firstName` and `lastName`. The function should return the full name in
//    the format `lastName, firstName`.
//
// 2. Format the firstName and lastName so that the first letter of each is
//    always capitalized.
//
// 3. Add a condition that checks if either the first or last name is missing.
//    If so, return a string saying "Invalid name input."

// ____________________________________________________________________________
// Main
// ____________________________________________________________________________

function capitalizeFirstLetter(word) {
  return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`
  // Another implementation that ensures the rest of the word is lowercase:
  // return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`
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
// Demo
// ____________________________________________________________________________

const demoFirstName = "darth"
const demoLastName = "vader"

function demoFormatFullName(
  firstName = demoFirstName,
  lastName = demoLastName
) {
  const [arg0, arg1] = [JSON.stringify(firstName), JSON.stringify(lastName)]
  const formattedFullName = JSON.stringify(formatFullName(firstName, lastName))

  const output = `formatFullName(${arg0}, ${arg1}) returns ${formattedFullName}.`
  console.log(output)
}

// Only call demoFormatFullName() if this file is executed directly
if (import.meta.url === `file:///${process.argv[1].replaceAll("\\", "/")}`) {
  demoFormatFullName()
}

export { formatFullName }
