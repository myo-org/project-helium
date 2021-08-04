/**
 * TESTING NOTES
 * @styling
 * * @title_blue
 */

const COLOR = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        crimson: "\x1b[48m"
    }
}

const print = (print_me,color_primary, color_secondary = null) => {
    console.log(COLOR.fg.blue, print_me, COLOR.reset)
}

const unit_test = (description, callback) => {
    // print out in style
    print(description, COLOR.fg.blue)
    callback()

}
const expect = function (source) {
    let to_print = null
    const toBe = (expected) => {
        to_print = (source == expected)? true : false
        return print(to_print)
    }
    return {toBe}
}

module.exports = {
    unit_test,
    expect
}