var captar = ""
var secondName = ""
var campoEstudo = ""
var ano = 2022
var nascimento = ""

function enviar() {
    captar = document.getElementById("textinput").value;
    secondName = document.getElementById("secondName").value;
    campoEstudo = document.getElementById("campoEstudo").value;
    nascimento = document.getElementById("nascimento").value;

    document.querySelector('#resultado').innerHTML = `Seu nome é ${captar} ${secondName}, você tem ${ano - nascimento} anos e sua área de estudo é: ${campoEstudo} `
}

