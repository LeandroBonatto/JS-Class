function loading() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hour = data.getHours()
    msg.innerHTML = `It is ${hour} o'clock`
    if (hour >= 0 && hour < 12) {
        // Morning
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour < 18) {
        // Afternoon
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // Evening
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}