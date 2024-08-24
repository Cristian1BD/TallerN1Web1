let num1 = parseFloat(prompt(" ingrese el numero "));
let num2 = parseFloat(prompt(" ingrese el numero "));
let operacion = (prompt(" ingrese la operacion "));
let Resultado;

switch(operacion)
{
    case 'suma':
        Resultado = num1 + num2
        break
    case 'resta':
        Resultado = num1 - num2
        break
    case 'division':
        if (num2 !== 0) {
            Resultado = num1 / num2;
        } else {
            Resultado = 'Error: profe si vio este mensaje es por que intento dividir por cero y no se puede';
        }
        num1 / num2
        break
    case 'multiplicacion':
        Resultado = num1 * num2
        break
    default:
        Mensaje = (" Opción no válida")
}
alert("Resultado es " + Resultado);
console.log("Resultadp es " + Resultado );