function showMyName () {
    basic.showString("My name is Jason ")
    basic.pause(300)
    basic.showString("FOT student ")
}
let count = 10
while (count > 0) {
    basic.showNumber(count)
    count += 0 - 1
    showMyName()
    basic.pause(2000)
    showMyName()
}
