// Agrega elementos a la pantalla el boton que clickees de la calculadora
function agregar(valor) {
document.getElementById('pantalla').value += valor;
}

//Borra todo en la pantalla de la calculadora
function borrar() {
    document.getElementById('pantalla').value = '';
}

//Realiza los calculos de la calculadora
function resultado() {
    const valorPantalla = document.getElementById('pantalla').value;
    const calculo = eval(valorPantalla);
    document.getElementById('pantalla').value = calculo;
}