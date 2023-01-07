function verify() {
    var data = new Date()
    var year = data.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert('[ERROR] Check fields and try again')
    } else {
        var fgender = document.getElementsByName('radgender')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fgender[0].checked) {
            gender = 'Male'
            if (age >= 0 && age < 10) {
                // kid
                img.setAttribute('src', 'baby-m.jpg')
            } else if (age < 21) {
                // young
                img.setAttribute('src', 'young-m.jpg')
            } else if (age < 50) {
                // adult
                img.setAttribute('src', 'adult-m.jpg')
            } else {
                // old
                img.setAttribute('src', 'old-m.jpg')
            }
        }
        if (fgender[1].checked) {
            gender = 'Female'
            if (age >= 0 && age < 10) {
                // kid
                img.setAttribute('src', 'baby-f.jpg')
            } else if (age < 21) {
                // young
                img.setAttribute('src', 'young-f.jpg')
            } else if (age < 50) {
                // adult
                img.setAttribute('src', 'adult-f.jpg')
            } else {
                // old
                img.setAttribute('src', 'old-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detected ${gender} with ${age} years.`
        res.appendChild(img)
    }
}