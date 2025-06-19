# Lab 4.1: Variables and Functions

[Karl Johnson](https://github.com/hirekarl)  
2025-RTT-30  
<date datetime="2025-06-19">2025-06-19</date>  

![Preview of a terminal screen with assignment output.](./preview.png)

## Overview
### Viewer Instructions
In the root directory, run*:

```bash
node index
```

*\*Note that custom text colors (implemented with ANSI escape sequences) may not work in Visual Studio Code's default Output pane with Run Code&mdash;run from the Terminal pane with `node index`.*

### Solution
View solution source at [`./index.js`](./index.js).

### Scenario
You are tasked with writing JavaScript code for a data processing tool. This tool will handle user input, perform mathematical calculations, manipulate strings, and provide dynamic feedback based on user actions. As the team’s JavaScript expert, you need to write efficient and reusable functions to ensure your code is scalable.

In this activity, you will solve more coding challenges that involve creating and manipulating variables, using functions with multiple parameters, and handling conditional logic. The tasks will focus on making your functions more flexible and reusable, a skill that will be crucial for larger projects.

### Lab Instructions
#### Task 1: Flexible String Manipulation with Functions
1. Create a function called `formatFullName` that takes two parameters: `firstName` and `lastName`. The function should return the full name in the format `lastName, firstName`.
2. Format the `firstName` and `lastName` so that the first letter of each is always capatilized.
3. Add a condition that checks if either the first or last name is missing. If so, return a string saying `"Invalid name input."`

#### Task 2: Mathematical Operations with Multiple Parameters
1. Write a function called `calculateTotalCost` that takes three parameters: `price`, `quantity`, and `taxRate`.
2. The function should calculate the total cost of items, including tax. Use the formula: ```totalCost = (price * quantity) * (1 + taxRate)```
4. Ensure that `price`, `quantity`, and `taxRate` are all valid numbers. If any are invalid, return a string: `"Invalid input."`

#### Task 3: Functions with Conditional Logic
1. Write a function called `checkEligibility` that takes two parameters: `age` and `isEmployed`. The function should check if a person is eligible for a program based on the following rules:
  - If the person is over 18 and employed, they are eligible.
  - If the person is over 18 but unemployed, they are conditionally eligible.
  - If the person is 18 or younger, they are not eligible.
2. Return an appropriate string message for each scenario.

#### Task 4: Refactoring for Reusability
1. Refactor the `calculateTotalCost` function from Task 2 to include an optional `discount` parameter. If the discount is provided, the function should subtract the discount from the total cost before applying tax.
2. If no discount is provided, calculate the total cost as before.

### Reflection
After completing this activity, take a few minutes to reflect on the following questions:

1. How did you approach creating more flexible functions with parameters?

**

2. What challenges did you face while incorporating conditional logic in your functions?

**

3. How does refactoring improve the readability and maintainability of your code?

**