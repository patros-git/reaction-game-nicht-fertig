function signalAnzeigen () {
    radio.sendNumber(aktuelleAufgabe)
    basic.pause(5000)
    if (rundeGewonnen == false) {
        basic.showString("---")
        basic.setLedColor(0x000000)
        rundeAktiv = false
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
    signalAnzeigen()
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
