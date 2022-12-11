let soil_moisture = 0
basic.showString("Hello!")
basic.forever(function () {
    soil_moisture = 0
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(soil_moisture)
    }
    if (soil_moisture) {
        basic.showIcon(IconNames.Sad)
        while (soil_moisture) {
            basic.pause(1000)
            basic.pause(1000)
            soil_moisture = pins.analogReadPin(AnalogPin.P2)
        }
    } else {
        led.plotBarGraph(
        0,
        pins.map(
        soil_moisture,
        650,
        500,
        0,
        25
        )
        )
    }
})
