document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos referencias a los enlaces del menú
    const cuadrosLink = document.getElementById('cuadros');
    const jardinLink = document.getElementById('jardin');
    const iluminacionLink = document.getElementById('iluminacion');
    const cocinaLink = document.getElementById('cocina');
    // Funciones para manejar los clics en los enlaces
    function manejarClicCuadros(event) {
        event.preventDefault(); // Evitamos que el enlace recargue la página
        alert('Ver cuadros"'); // Mostramos un mensaje (puedes cambiar esto según lo que desees hacer)
    }
    function manejarClicJardin(event) {
        event.preventDefault();
        alert('Ver arituclos de "Jardín y exterior"');
    }
    function manejarClicIluminacion(event) {
        event.preventDefault();
        alert('Ver articulos de "Iluminación"');
    }
    function manejarClicCocina(event) {
        event.preventDefault();
        alert('Ver elementos de "Cocina"');
    }
    // Agregamos event listeners a los enlaces para detectar clics
    cuadrosLink.addEventListener('click', manejarClicCuadros);
    jardinLink.addEventListener('click', manejarClicJardin);
    iluminacionLink.addEventListener('click', manejarClicIluminacion);
    cocinaLink.addEventListener('click', manejarClicCocina);
});