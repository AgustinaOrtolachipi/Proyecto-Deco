function submitReview() {
  var testimoniosContainer = document.getElementById("testimonios-container");
  var reviewText = document.getElementById("review-text").value;

  // Crear el nuevo testimonio
  var testimonio = document.createElement("div");
  testimonio.className = "testimonio";
  var testimonioTexto = document.createElement("div");
  testimonioTexto.className = "testimonio-texto";
  testimonioTexto.innerHTML = "<p>" + reviewText + "</p><p class='testimonio-autor'>- Usuario Anónimo</p>";
  testimonio.appendChild(testimonioTexto);

  // Agregar el nuevo testimonio debajo de los testimonios existentes
  testimoniosContainer.appendChild(testimonio);

  // Limpiar el campo de texto después de enviar la reseña
  document.getElementById("review-text").value = "";

  // Evitar que el formulario se envíe y la página se recargue
  return false;
}

  

