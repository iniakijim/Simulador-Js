function agregarDatos(event) {
  event.preventDefault(); 
  // Evita que el formulario se envíe

  // Obtener los valores del formulario
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;
  let dni = document.getElementById("dni").value;
  let email = document.getElementById("email").value;

  // Verificar si los campos están vacíos
  if (nombre === "" || apellido === "" || edad === "" || dni === "" || email === "") {
    alert("Por favor complete todos los campos del formulario.");
    return;
  }
  // Crear una nueva fila en la tabla
  let tabla = document.getElementById("tablaDatos");
  let fila = tabla.insertRow();
  
  // Insertar los valores en la fila
  let celdaNombre = fila.insertCell();
  let celdaApellido = fila.insertCell();
  let celdaEdad = fila.insertCell();
  let celdaDNI = fila.insertCell();
  let celdaEmail = fila.insertCell();
  
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

  // Verificar si la persona es mayor de 18 años
  for (let i = 0; i < 1; i++) {
    if (edad >= 18) {
      alert("La persona puede recibir el producto por email.");
    } else {
      alert("La persona no cumple con la edad mínima para recibir el producto por email.");
    }
  }

  // Enviar el formulario
  document.getElementById("formulario").submit();
}