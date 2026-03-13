function richtigGeantwortet (num: number) {
    let siegerID = 0
    rundeGewonnen = true
    if (siegerID == 1) {
        punkteS1 += 1
    } else if (siegerID == 2) {
        punkteS2 += 1
    } else if (siegerID == 3) {
        punkteS3 += 1
    } else if (siegerID == 4) {
        punkteS4 += 1
    }
    basic.setLedColor(0x00ff00)
    basic.showLeds(`
        . # # # #
        # . . . .
        . # # # .
        . . . . #
        # # # # .
        `)
    basic.showNumber(siegerID)
    basic.pause(1500)
    radio.sendValue("gewinner", siegerID)
    basic.pause(1000)
    basic.setLedColor(0x000000)
    basic.clearScreen()
}
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
            # . . . #
            # . . . #
            `)
    }
    if (aktuelleAufgabe == 2) {
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # . .
            . # . # .
            . # # # .
            `)
    }
    if (aktuelleAufgabe == 2) {
        basic.setLedColor(0x00ffff)
        basic.showIcon(IconNames.Heart)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
}
function falschGeantwortet (num: number) {
    if (Spieler_ID == 1) {
        punkteS1 += -1
    } else if (Spieler_ID == 2) {
        punkteS2 += -1
    } else if (Spieler_ID == 3) {
        punkteS3 += -1
    } else if (Spieler_ID == 4) {
        punkteS4 += -1
    }
    radio.sendValue("falsch", Spieler_ID)
}
function antwortVerarbeiten (num: number) {
    Spieler_ID = Math.idiv(num, 10)
    aktion = num % 10
    if (Spieler_ID >= 1 && Spieler_ID <= 4) {
        if (aktion == aktuelleAufgabe) {
            richtigGeantwortet(Spieler_ID)
        } else {
            falschGeantwortet(Spieler_ID)
        }
    }
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
let aktion = 0
let Spieler_ID = 0
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
