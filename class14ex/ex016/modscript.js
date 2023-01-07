function count() {
    let start = document.getElementById('txts')
    let end = document.getElementById('txte')
    let pace = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || pace.value.length == 0) {
        window.alert('[ERROR] Missing field')
    } else {
        res.innerHTML = 'Counting: '
        let s = Number(start.value)
        let e = Number(end.value)
        let p = Number(pace.value)
        if ( s < e) {
            // COUNTING UP
            for(let c = s; c <= e; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`

        } else {
             // COUNTING DOWN
            for(let c = s; c >= e; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}