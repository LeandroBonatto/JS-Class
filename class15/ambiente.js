let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1) // Firstly the program will sort(above) then it will push 1
console.log(num)
console.log(`The vector has ${num.length} positions.`)
console.log(`The first vetor value is ${num[0]}`)
let pos = num.indexOf(8)
console.log(`The 8 value is in the position ${pos}`)