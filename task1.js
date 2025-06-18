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

function capitalizeFirstLetter(word) {
  return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`
}

function isValidInput(param1, param2) {
  return param1 && param1 !== "" && param2 && param2 !== ""
}

function formatFullName(firstName, lastName) {
  if (!isValidInput(firstName, lastName)) {
    return "Invalid name input."
  }

  const capitalizedFirstName = capitalizeFirstLetter(firstName)
  const capitalizedLastName = capitalizeFirstLetter(lastName)

  return `${capitalizedLastName}, ${capitalizedFirstName}`
}

function demoFormatFullName(firstName, lastName) {
  console.log(formatFullName(firstName, lastName))
}

demoFormatFullName("darth", "vader")

export { formatFullName }
