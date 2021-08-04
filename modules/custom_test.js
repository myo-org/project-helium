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



const print = (print_me, color_primary = null, color_secondary = null) => {
    console.log(color_primary || '', print_me, COLOR.reset)
}

let test_passed = false

module.exports = {
    describe : (description, callback) => {
        // print out in style
        print(description, COLOR.fg.blue)
        callback()
    },
    test : (description, callback) => {
        // print out in style
        let test_passed = null;
        test_passed = callback()
        test_completed = true
        while(!test_completed){
            console.log(`......\n`)
        }
        print(description, test_passed ? COLOR.fg.green : COLOR.fg.red)
        print(test_passed)
    },
    it : async (description, callback) => {
        // print out in style
        let test_passed = null;
        console.log('before:',test_passed)
        console.log(callback)
        await callback()
        console.log('after:',test_passed)
        test_completed = true
        while(!test_completed){
            console.log(`......\n`)
        }
        print(description, test_passed ? COLOR.fg.green : COLOR.fg.red)
        print(test_passed)
    },
    expect : (source) => {
        const toEqual = (expected) => {
            test_passed = (source == expected)? true : false
        }
        return {toEqual}
    }

}