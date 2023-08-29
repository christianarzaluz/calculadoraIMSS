document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("imss-form");
    const resultContainer = document.getElementById("result-container");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const promedioCarrera = parseFloat(document.getElementById("promedio-carrera").value);
        const puntajeEnarm = parseFloat(document.getElementById("puntaje-enarm").value);
        const ejercicioDocente = document.getElementById("ejercicio-docente").checked;
        const añosEjercicioDocente = parseInt(document.getElementById("años-ejercicio-docente").value);
        const publicacionesAutor = document.getElementById("publicaciones-autor").checked;
        const cantidadPublicaciones = parseInt(document.getElementById("cantidad-publicaciones").value);
        
        // Obtén el valor seleccionado (trabajador o hijo)
        const imssStatus = document.querySelector('input[name="imss-status"]:checked');
        
        const realizoInternadoImss = document.getElementById("realizo-internado-imss").checked;
        const realizoServicioSocialImss = document.getElementById("realizo-servicio-social-imss").checked;
        
        let puntaje = (promedioCarrera + puntajeEnarm) / 2;
        
        if (ejercicioDocente) {
            puntaje += Math.min(añosEjercicioDocente, 2) * 0.5;
        }
        
        if (publicacionesAutor) {
            puntaje += Math.min(cantidadPublicaciones, 2) * 0.5;
        }
        
        if (imssStatus && imssStatus.value === "trabajador") {
            // Suma 1 punto para trabajador IMSS
            puntaje += 1;
        } else if (imssStatus && imssStatus.value === "hijo") {
            // Suma 0.75 puntos para hijo de trabajador IMSS
            puntaje += 0.75;
        }
        
        if (realizoInternadoImss) {
            puntaje += 0.25;
        }
        
        if (realizoServicioSocialImss) {
            puntaje += 0.75;
        }
        
        resultContainer.innerHTML = `Tu Puntaje IMSS es: <span id="puntaje-imss">${puntaje.toFixed(2)}</span>`;
    });
});



  
  
