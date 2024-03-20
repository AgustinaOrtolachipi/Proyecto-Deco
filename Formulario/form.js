document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('registroForm');
    const inicioSesionForm = document.getElementById('inicioSesionForm');
    const mensajeDiv = document.getElementById('mensaje');
    const registroDiv = document.getElementById('registro');
    const inicioSesionDiv = document.getElementById('inicioSesion');
  
    registroForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombreRegistro').value;
      mensajeDiv.textContent = `¡Registro exitoso, bienvenido ${nombre}!`;
      registroDiv.classList.add('hidden');
      mensajeDiv.classList.remove('hidden');
    });
  
    inicioSesionForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('emailInicio').value;
      mensajeDiv.textContent = `¡Bienvenido nuevamente al inicio de sesión, ${email}!`;
      inicioSesionDiv.classList.add('hidden');
      mensajeDiv.classList.remove('hidden');
    });
  });
  