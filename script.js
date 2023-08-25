document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('imss-form');
    const resultContainer = document.getElementById('result-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener los valores del formulario
        const promedioCarrera = parseFloat(document.getElementById('promedio-carrera').value) || 0;
        const puntajeEnarm = parseFloat(document.getElementById('puntaje-enarm').value) || 0;
        const ejercicioDocente = document.getElementById('ejercicio-docente').checked;
        const añosEjercicioDocente = parseInt(document.getElementById('años-ejercicio-docente').value) || 0;
        const publicacionesAutor = document.getElementById('publicaciones-autor').checked;
        const cantidadPublicaciones = parseInt(document.getElementById('cantidad-publicaciones').value) || 0;
        const hijoTrabajadorImss = document.getElementById('hijo-trabajador-imss').checked;
        const trabajadorImss = document.getElementById('trabajador-imss').checked;
        const realizoInternadoImss = document.getElementById('realizo-internado-imss').checked;
        const realizoServicioSocialImss = document.getElementById('realizo-servicio-social-imss').checked;

        // Realizar los cálculos
        let puntaje = (promedioCarrera + puntajeEnarm) / 2;

        if (ejercicioDocente) {
            puntaje += Math.min(añosEjercicioDocente, 4) * 0.25; // Máximo 1 punto (0.25 por año)
        }

        if (publicacionesAutor) {
            puntaje += Math.min(cantidadPublicaciones, 4) * 0.25; // Máximo 1 punto (0.25 por publicación)
        }

        if (hijoTrabajadorImss || trabajadorImss) {
            puntaje += 1; // Se otorga 1 punto si es hijo o trabajador IMSS
        }

        if (realizoInternadoImss) {
            puntaje += 0.25; // 0.25 puntos por realizar internado IMSS
        }

        if (realizoServicioSocialImss) {
            puntaje += 0.75; // 0.75 puntos por realizar servicio social IMSS
        }

        // Mostrar el resultado en el elemento #result-container
        resultContainer.textContent = `Tu puntaje IMSS es: ${puntaje.toFixed(2)} sobre 100`;
    });
});

  
  
