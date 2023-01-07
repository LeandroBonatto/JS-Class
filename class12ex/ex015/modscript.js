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
        
    }
}