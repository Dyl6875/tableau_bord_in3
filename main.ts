makerbit.onUltrasonicObjectDetected(10, DistanceUnit.CM, function () {
    basic.showString("" + (makerbit.getUltrasonicDistance(DistanceUnit.CM)))
})
radio.setGroup(107)
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P5, DigitalPin.P8)
basic.forever(function () {
    radio.sendString("obstacle")
    radio.sendString("" + (makerbit.getUltrasonicDistance(DistanceUnit.CM)))
})
