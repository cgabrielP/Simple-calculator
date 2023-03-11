function sumar() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let resultado = num1 + num2;
    document.querySelector("#resultado").value = resultado;
}

function restar() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let resultado = num1 - num2;
    document.querySelector("#resultado").value = resultado;
}

function multiplicar() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let resultado = num1 * num2;
    document.querySelector("#resultado").value = resultado;
}

function dividir() {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    if (num2 == 0) {
        alert("No se puede dividir por cero.");
        return;
    }
    let resultado = num1 / num2;
    document.querySelector("#resultado").value = resultado;
}