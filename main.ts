radio.onReceivedNumber(function (receivedNumber) {
    if (rundeAktiv == true && rundeGewonnen == false) {
        antwortVerarbeiten(receivedNumber)
    }
})
function signalAnzeigen () {
    if (aktuelleAufgabe == 1) {
        basic.setLedColor(0x00ff00)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    }
    if (aktuelleAufgabe == 2) {
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
    }
    if (aktuelleAufgabe == 2) {
        basic.setLedColor(0x00ffff)
        basic.showIcon(IconNames.Heart)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
}
function antwortVerarbeiten (num: number) {
	
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (rundeAktiv == false) {
    	
    }
})
function rundeStarten () {
    rundeAktiv = true
    rundeGewonnen = false
    aktuelleAufgabe = randint(1, 3)
    radio.sendNumber(aktuelleAufgabe)
    signalAnzeigen()
    basic.pause(5000)
    if (rundeGewonnen == false) {
        basic.showString("---")
        basic.setLedColor(0x000000)
        rundeAktiv = false
    }
}
let rundeGewonnen = false
let rundeAktiv = false
let aktuelleAufgabe = 0
radio.setGroup(1)
let punkteS1 = 0
let punkteS2 = 0
let punkteS3 = 0
let punkteS4 = 0
aktuelleAufgabe = 0
rundeAktiv = false
rundeGewonnen = false
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
