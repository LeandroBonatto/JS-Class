var age = 67
if (age < 16) {
    console.log('Can not vote') 
} else if (age < 18 || age > 65) {
    console.log('Optional vote')
} else {
    console.log('Vote is a must')
}