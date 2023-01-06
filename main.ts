input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # . # . #
            . . . . .
            . . . . .
            # . . . #
            # # . # #
            `)
        basic.pause(1000)
    }
})
function doSomething (image: Image) {
	
}
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        basic.showString("Hello world, i am from sweden and i welcome you!")
        basic.pause(1000)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    turtle.forward(7 * 13038)
    turtle.setSpeed(7 * 13038)
})
