import { formatFullName } from "./task1.js"

function testFormatFullName() {
  const testCase1 = {
    input: ["John", "Smith"],
    expected_output: "Smith, John",
  }

  const testCase2 = {
    input: ["john", "smith"],
    expected_output: "Smith, John",
  }

  const testCase3 = {
    input: [null, "Smith"],
    expected_output: "Invalid name input.",
  }

  const testCase4 = {
    input: ["Smith"],
    expected_output: "Invalid name input.",
  }

  const testCase5 = {
    input: ["John", ""],
    expected_output: "Invalid name input.",
  }

  const testCases = [testCase1, testCase2, testCase3, testCase4, testCase5]

  let passCount = 0
  let failCount = 0

  console.log("========================================")

  for (let testCase of testCases) {
    let testNumber = testCases.indexOf(testCase) + 1

    console.log(`TEST ${testNumber}:`)
    console.log(`- Input:           "${[...testCase.input].join('", "')}"`)
    console.log(`- Expected Output: "${testCase.expected_output}"`)
    console.log(`- Actual Output:   "${formatFullName(...testCase.input)}"`)

    if (testCase.expected_output !== formatFullName(...testCase.input)) {
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
