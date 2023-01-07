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
            gender = 'male'
            if (age >= 0 && age < 10) {
                // kid
            } else if (age < 21) {
                // young
            } else if (age < 50) {
                // adult
            } else {
                // old
            }
        }
        if (fgender[0].checked) {
            gender = 'male'
            if (age >= 0 && age < 10) {
                // kid
            } else if (age < 21) {
                // young
            } else if (age < 50) {
                // adult
            } else {
                // old
            }
        }
    }
}