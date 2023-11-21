input.onButtonPressed(Button.A, function () {
    multiply()
})
function multiply () {
    n = n * 2
}
let n = 0
basic.showIcon(IconNames.Heart)
n = 1
basic.forever(function () {
    basic.showString("" + (n))
})
