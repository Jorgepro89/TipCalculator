function limpiar() {
    document.getElementById('calculadora').reset();

}

function cinco() {
    var x = parseInt(document.getElementById('Bill').value);
    var y = parseInt(document.getElementById('NumOfPeople').value);
    var operacion1 = (x * 0.05) / y;
    var operacion2 = ((x / y) + ((x * 0.05) / y))
    var resultado1 = operacion1.toFixed(2);
    var resultado2 = operacion2.toFixed(2);
    document.getElementById('resultado1').innerHTML = resultado1;
    document.getElementById('resultado2').innerHTML = resultado2;
}

function diez() {
    var x = parseInt(document.getElementById('Bill').value);
    var y = parseInt(document.getElementById('NumOfPeople').value);
    var operacion1 = (x * 0.10) / y;
    var operacion2 = ((x / y) + ((x * 0.10) / y))
    var resultado1 = operacion1.toFixed(2);
    var resultado2 = operacion2.toFixed(2);
    document.getElementById('resultado1').innerHTML = resultado1;
    document.getElementById('resultado2').innerHTML = resultado2;

}

function quince() {
    var x = parseInt(document.getElementById('Bill').value);
    var y = parseInt(document.getElementById('NumOfPeople').value);
    var operacion1 = (x * 0.15) / y;
    var operacion2 = ((x / y) + ((x * 0.15) / y))
    var resultado1 = operacion1.toFixed(2);
    var resultado2 = operacion2.toFixed(2);
    document.getElementById('resultado1').innerHTML = resultado1;
    document.getElementById('resultado2').innerHTML = resultado2;

}

function vecinco() {
    var x = parseInt(document.getElementById('Bill').value);
    var y = parseInt(document.getElementById('NumOfPeople').value);
    var operacion1 = (x * 0.25) / y;
    var operacion2 = ((x / y) + ((x * 0.25) / y))
    var resultado1 = operacion1.toFixed(2);
    var resultado2 = operacion2.toFixed(2);
    document.getElementById('resultado1').innerHTML = resultado1;
    document.getElementById('resultado2').innerHTML = resultado2;

}

function cicuenta() {
    var x = parseInt(document.getElementById('Bill').value);
    var y = parseInt(document.getElementById('NumOfPeople').value);
    var operacion1 = (x * 0.05) / y;
    var operacion2 = ((x / y) + ((x * 0.25) / y))
    var resultado1 = operacion1.toFixed(2);
    var resultado2 = operacion2.toFixed(2);
    document.getElementById('resultado1').innerHTML = resultado1;
    document.getElementById('resultado2').innerHTML = resultado2;

}

function custom() {
    var x = parseInt(document.getElementById('Bill').value);
    var y = parseInt(document.getElementById('NumOfPeople').value);
    var z = parseInt(document.getElementById('Custom').value);
    var operacion0 = z / 100;
    var operacion1 = (x * operacion0) / y;
    var operacion2 = ((x / y) + ((x * operacion0) / y))
    var resultado1 = operacion1.toFixed(2);
    var resultado2 = operacion2.toFixed(2);
    document.getElementById('resultado1').innerHTML = resultado1;
    document.getElementById('resultado2').innerHTML = resultado2;

}