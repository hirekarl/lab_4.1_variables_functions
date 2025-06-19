import { formatFullName } from "./task1.js"

function testFormatFullName() {
  const testCase1 = {
    input: ["John", "Smith"],
    expected: "Smith, John",
  }

  const testCase2 = {
    input: ["john", "smith"],
    expected: "Smith, John",
  }

  const testCase3 = {
    input: [null, "Smith"],
    expected: "Invalid name input.",
  }

  const testCase4 = {
    input: ["Smith"],
    expected: "Invalid name input.",
  }

  const testCase5 = {
    input: ["John", ""],
    expected: "Invalid name input.",
  }

  const testCases = [testCase1, testCase2, testCase3, testCase4, testCase5]

  let passCount = 0
  let failCount = 0

  console.log("========================================")

  for (const testCase of testCases) {
    const testNumber = testCases.indexOf(testCase) + 1

    const [testCaseArg1, testCaseArg2] = [...testCase.input]
    const testCaseArg1JSON = JSON.stringify(testCaseArg1)
    const testCaseArg2JSON = JSON.stringify(testCaseArg2)

    const testCaseExpected = testCase.expected
    const testCaseExpectedJSON = JSON.stringify(testCase.expected)

    const testCaseActual = formatFullName(...testCase.input)
    const testCaseActualJSON = JSON.stringify(testCaseActual)

    console.log(`TEST ${testNumber}:`)
    console.log(`- Input:           [${testCaseArg1JSON}, ${testCaseArg2JSON}]`)
    console.log(`- Expected Output: ${testCaseExpectedJSON}`)
    console.log(`- Actual Output:   ${testCaseActualJSON}`)

    if (testCaseExpected !== testCaseActual) {
      failCount++
      console.log("FAIL")
    } else {
      passCount++
      console.log("PASS")
    }
    console.log("----------------------------------------")
  }

  console.log(`PASSES: ${passCount} | FAILS: ${failCount}`)
  console.log("========================================")
}

testFormatFullName()
