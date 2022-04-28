input.onButtonPressed(Button.B, function () {
    pulsado = 1
})
let pulsado = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
pulsado = 0
let tiempo = 9
basic.forever(function () {
    if (pulsado == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        tiempo = 9
    }
    if (pulsado == 1) {
        for (let index = 0; index < 5; index++) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.pause(100)
            music.playTone(262, music.beat(BeatFraction.Half))
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        for (let index = 0; index < 10; index++) {
            basic.showString("" + (tiempo))
            tiempo += -1
            music.playTone(440, music.beat(BeatFraction.Half))
            basic.pause(100)
            music.playTone(523, music.beat(BeatFraction.Half))
            basic.pause(100)
            music.playTone(659, music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 8; index++) {
            music.playTone(523, music.beat(BeatFraction.Quarter))
            basic.pause(200)
        }
        pins.digitalWritePin(DigitalPin.P2, 0)
        pulsado = 0
        tiempo = 9
    }
})
