function count() {
    let start = document.getElementById('txts')
    let end = document.getElementById('txte')
    let pace = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || pace.value.length == 0) {
        window.alert('[ERROR] Missing field')
    } else {
        res.innerHTML = 'Counting: '
    }
}