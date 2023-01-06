var oclock = 8
var hora = oclock.getHours()
console.log(`Now is ${oclock} o clock.`)
if(oclock < 12) {
    console.log('Good morning.')
} else if (oclock <= 18) {
    console.log('Good afternoon.')
} else {
    console.log('Good evening.')
}