function insert(num) {
    let numero = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = numero + num
}

function clean() {
    document.querySelector('#resultado').innerHTML = ''
}

function back() {
    let res = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = res.substring(0, res.length -1)
}

function calc() {
    let res = document.querySelector('#resultado').innerHTML
    if(res) {
        document.querySelector('#resultado').innerHTML = eval(res)
    } else {
        document.querySelector('#resultado').innerHTML = '[ERRO]'  
    }
}