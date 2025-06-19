import { yellow, green, blue, magenta } from "./colorize.js"

const TERMINAL_COLS = 80

// Utilities

function center(text) {
  const offset = text.length + Math.ceil(TERMINAL_COLS / 2 - text.length / 2)
  return text.padStart(offset)
}

function fillCols(pattern) {
  return pattern.repeat(Math.floor(TERMINAL_COLS / pattern.length))
}

// Info Sections

function infoSection(message) {
  const pattern = "-."
  const line = `${green(fillCols(pattern))}`

  const display = `\n${line}\n${message}\n${line}`

  return display
}

function welcome(addressee) {
  const message = `${yellow(center("Welcome, " + addressee) + " 💻")}`

  return infoSection(message)
}

function goodbye() {
  const message = `${yellow(center("Have a nice day")) + " 🚀"}`

  return infoSection(message)
}

// Task Headers

function taskHeader(text) {
  const pattern = "_"
  const line = `${magenta(fillCols(pattern))}`
  const headerText = `${blue(text)}`

  const display = `\n${line}\n${headerText}\n`

  return display
}

export { welcome, goodbye, taskHeader }
