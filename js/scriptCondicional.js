let nombre = prompt("Ingrese su Nombre");
let apellidoPaterno = prompt("Ingrese su Apellido Paterno");
let apellidoMaterno = prompt("Ingrese su Apellido Materno");
const espacioBlanco = " ";

let nombreCompleto = nombre + espacioBlanco + apellidoPaterno + espacioBlanco + apellidoMaterno;

fecha = new Date(); 
hora = fecha.getHours();

if(hora >= 0 && hora < 12){
    texto = "Buenos Días";
} else if(hora >= 12 && hora < 18){
        texto = "Buenas Tardes";
    } else {
        texto = "Buenas Noches";
    }
alert(texto + espacioBlanco + nombreCompleto);