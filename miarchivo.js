let notificacion = prompt("¿Desea recibir notificaciones por e-mail? Si/No");
confirm(notificacion);
if (notificacion == "Si") {
  let email = prompt("Ingrese su email:");
  let edad = prompt("Ingrese su edad:");
  if (edad >= 18) {
    document.write("Su direccion de mail es:" + " " + email);
  } else {
    document.write("No tiene la edad suficiente para recibir esta revista.");
  }
}