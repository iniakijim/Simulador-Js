
function agregarDatos(event) {
  event.preventDefault(); 
  // Evita que el formulario se envíe

  // Obtener los valores del formulario
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var edad = document.getElementById("edad").value;
  var dni = document.getElementById("dni").value;
  var email = document.getElementById("email").value;
 
  // Verificar si los campos están vacíos
  
   if (nombre === "" || apellido === "" || edad === "" || dni  === "" || email === "") {
   alert("Por favor complete todos los campos del formulario.");
   return; // detener la ejecución de la función
   }

  // Crear una nueva fila en la tabla
  var tabla = document.getElementById("tablaDatos");
  var fila = tabla.insertRow();
  
  // Insertar los valores en la fila
  var celdaNombre = fila.insertCell();
  var celdaApellido = fila.insertCell();
  var celdaEdad = fila.insertCell();
  var celdaDNI = fila.insertCell();
  var celdaEmail = fila.insertCell();
  
  celdaNombre.innerHTML = nombre;
  celdaApellido.innerHTML = apellido;
  celdaEdad.innerHTML = edad;
  celdaDNI.innerHTML = dni;
  celdaEmail.innerHTML = email;
  
  // Limpiar el formulario
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("email").value = "";
}

