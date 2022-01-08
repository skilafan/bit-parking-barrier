let lastDetectionTime = 0
let hasCar = 0
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . # . . .
    . # . . .
    `)
basic.forever(function () {
    if (YFSENSORS.digitalInputModule(DigitalPin.P1, YFDigitalInputModule.INFRARED_PROXIMITY_SENSOR)) {
        hasCar = 1
        lastDetectionTime = input.runningTime()
    } else {
        if (input.runningTime() - lastDetectionTime > 3000) {
            hasCar = 0
        }
    }
    if (hasCar == 1) {
        SuperBit.Servo2(SuperBit.enServo.S1, 165)
    } else {
        SuperBit.Servo2(SuperBit.enServo.S1, 60)
    }
    basic.pause(100)
})
