// //funkce pro motory
// function car_motor(lw: number = 0, rw: number = 0) {
//     const ul = Math.map(lw, -100, 100, -255, 255)
//     const ur = Math.map(rw, -100, 100, -255, 255)
//     PCAmotor.MotorRun(PCAmotor.Motors.M1, -ul)
//     PCAmotor.MotorRun(PCAmotor.Motors.M4, ur)
// }

// //automatizovana jizda
// function dopredu() {
//     PCAmotor.MotorRun(PCAmotor.Motors. M1 && M4)
//     basic.pause(4000);
//     PCAmotor.MotorStopAll;
// }



//jizda
radio.setGroup(54)
radio.setFrequencyBand(7)

let btnA = 0
let btnB = 0
let logo = 0

radio.onReceivedString(function (receivedString: string) {
    let arr = []
    arr.push(receivedString.charCodeAt(0)) // znak 1 - dimenze x
    arr.push(receivedString.charCodeAt(1)) // znak 2 - dimenze y

    for (let i = 2; i <= 7; i++) {
        arr.push(parseInt(receivedString.charAt(i)));
    }
    btnA = arr[2]
    btnB = arr[3]
    logo = arr[4]
})

basic.forever(function () {
    if (logo) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -250)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -250)
    } else {
        if (btnA) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 250)
        } else {
            PCAmotor.MotorStop(PCAmotor.Motors.M1)
        }
        if (btnB) {
            PCAmotor.MotorRun(PCAmotor.Motors.M4, 250)
        } else {
            PCAmotor.MotorStop(PCAmotor.Motors.M4)
        }
    }
})