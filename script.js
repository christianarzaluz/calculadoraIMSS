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
        const hijoTrabajadorImss = document.getElementById("hijo-trabajador-imss").checked;
        const trabajadorImss = document.getElementById("trabajador-imss").checked;
        const realizoInternadoImss = document.getElementById("realizo-internado-imss").checked;
        const realizoServicioSocialImss = document.getElementById("realizo-servicio-social-imss").checked;
        
        let puntaje = (promedioCarrera + puntajeEnarm) / 2;
        
        if (ejercicioDocente) {
            puntaje += Math.min(añosEjercicioDocente, 2) * 0.5;
        }
        
        if (publicacionesAutor) {
            puntaje += Math.min(cantidadPublicaciones, 2) * 0.5;
        }
        
        if (hijoTrabajadorImss && !trabajadorImss) {
            puntaje += 0.75; // Solo se suma si es Hijo de trabajador IMSS
        } else if (!hijoTrabajadorImss && trabajadorImss) {
            puntaje += 1; // Solo se suma si es Trabajador IMSS
        } else if (hijoTrabajadorImss && trabajadorImss) {
            puntaje += Math.max(0.75, 1); // Se suma el mayor valor entre 0.75 y 1
        }
        
        if (realizoInternadoImss) {
            puntaje += 0.25;
        }
        
        if (realizoServicioSocialImss) {
            puntaje += 0.75;
        }
        
        resultContainer.innerHTML = `Tu Puntaje IMSS es: <span id="puntaje-imss">${puntaje.toFixed(2)}</span>/100`;
    });
});


  
  
