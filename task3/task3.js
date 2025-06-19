// ____________________________________________________________________________
//     __          __    __ __   ___  _____
//    / /   ____ _/ /_  / // /  <  / |__  /   _._     _,-'""`-._
//   / /   / __ `/ __ \/ // /_  / /   /_ <   (,-.`._,'(       |\`-/|
//  / /___/ /_/ / /_/ /__  __/ / /_ ___/ /       `-.-' \ )-`( , o o)
// /_____/\__,_/_.___/  /_/ (_)_/(_)____/              `-    \`_`"'-
//
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
//
// Functions with Conditional Logic
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
//
// 1. Write a function called checkEligibility that takes two parameters: age
//    and isEmployed. The function should check if a person is eligible for a
//    program based on the following rules:
//    - If the person is over 18 and employed, they are eligible.
//    - If the person is over 18 but unemployed, they are conditionally
//      eligible.
//    - If the person is 18 or younger, they are not eligible.
//
// 2. Return an appropriate string message for each scenario.

// ____________________________________________________________________________
// Main
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

// ____________________________________________________________________________
// Demo
// ____________________________________________________________________________

function demoCalculateTotalCost(name, age, isEmployed) {
  let output = checkEligibility(age, isEmployed)
  output = output.replace("The person", name)

  console.log(output)
}

demoCalculateTotalCost("Matthew", 16, true)
demoCalculateTotalCost("Mark", 17, false)
demoCalculateTotalCost("Luke", 18, true)
demoCalculateTotalCost("John", 19, false)
demoCalculateTotalCost("Ringo", 20, true)

export { checkEligibility }
