const ANSI = {
  Color: {
    RED: "\x1b[31m",
    YELLOW: "\x1b[33m",
    GREEN: "\x1b[32m",
    BLUE: "\x1b[34m",
    MAGENTA: "\x1b[35m",
  },
  Terminator: "\x1b[0m",
}

function colorize(text, ansiColor) {
  return `${ansiColor}${text}${ANSI.Terminator}`
}

function red(text) {
  return colorize(text, ANSI.Color.RED)
}

function yellow(text) {
  return colorize(text, ANSI.Color.YELLOW)
}

function green(text) {
  return colorize(text, ANSI.Color.GREEN)
}

function blue(text) {
  return colorize(text, ANSI.Color.BLUE)
}

function magenta(text) {
  return colorize(text, ANSI.Color.MAGENTA)
}

export { red, yellow, green, blue, magenta }
