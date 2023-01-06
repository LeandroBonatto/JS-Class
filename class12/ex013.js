var today = new Date()
var weekDay = today.getDate()

/* weekDay = 0 - will be Sunday */
/*
0 = Sun
1 = Mon
2 = Tue
3 = Wed
4 = Thu
5 = Fri
6 = Sat
*/

//console.log(weekDay)

switch(weekDay) {
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Sunday')
        break
    default:
        console.log('[ERROR] invalid day')
        break
}
