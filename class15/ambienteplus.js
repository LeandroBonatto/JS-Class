let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`The vector has ${num.length} positions.`)
console.log(`The first vetor value is ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('The value was not found')
} else {
    console.log('The value is in the position ${pos}')
}