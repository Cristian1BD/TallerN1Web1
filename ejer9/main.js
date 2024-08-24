let numero = parseInt(prompt(" ingrese el numero "));
let Mensaje

switch(numero){
    case 1:
        Mensaje = (" Opción 1 seleccionada");
        break
    case 2:
        Mensaje = (" Opción 2 seleccionada");
        break
    case 3:
        Mensaje = (" Opción 3 seleccionada");
        break
    case 4:
        Mensaje = (" Opción 4 seleccionada");
        break
    default:
        Mensaje = (" Opción no válida")
}
alert("Numero seleccionado " + numero + Mensaje);
console.log("Numero seleccionado " + numero + Mensaje );
