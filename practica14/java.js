// Funcion para sumar 2 numeros
function sumar() {

    var num1 = parseFloat(document.getElementById("numero1").value);

    var num2 = parseFloat(document.getElementById("numero2").value);

    var resultado = num1 + num2;

    mostarResultado(resultado);
}

function restar(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    var resultado = num1 - num2;

    mostarResultado(resultado);
}

function multiplicar(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    var resultado = num1 * num2;

    mostarResultado(resultado);
}

function dividir() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    if(num2 === 0) {
        mostarResultado("No es posible dividir por cero")
    } else {
        var resultado = num1 / num2;

        mostarResultado(resultado);
    }
    
}

function mostarResultado(resultado) {
    document.getElementById("resultado").innerHTML = "resultado: " + resultado.toFixed(2);
}