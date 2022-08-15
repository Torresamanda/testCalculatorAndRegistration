function calc(e) {
    var op = e.value

    var firstNumber = parseFloat(document.getElementById("firstNumber").value)
    var secondNumber = parseFloat(document.getElementById("secondNumber").value)

    var calc = eval(firstNumber + op + secondNumber)

    if(!isNaN(calc)) {
        document.querySelector('#result').innerHTML = `O resultado da sua conta é: ${calc}`
    }
    
}

function limpar() {
    var f = document.getElementById("frm");
    var firstNumber = f.firstNumber
    var secondNumber = f.secondNumber
    firstNumber.value = ""
    secondNumber.value = ""
}