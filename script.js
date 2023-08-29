document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("imss-form");
    const resultContainer = document.getElementById("result-container");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const promedioCarrera = parseFloat(document.getElementById("promedio-carrera").value);
        const puntajeEnarm = parseFloat(document.getElementById("puntaje-enarm").value);
        const añosEjercicioDocente = parseInt(document.getElementById("años-ejercicio-docente").value);
        const cantidadPublicaciones = parseInt(document.getElementById("cantidad-publicaciones").value);
        
        const imssStatus = form.querySelector('input[name="imss-status"]:checked').value;
        
        let puntaje = (promedioCarrera + puntajeEnarm) / 2;
        
        // Calcula los puntos adicionales
        puntaje += Math.min(añosEjercicioDocente, 2) * 0.5;
        puntaje += Math.min(cantidadPublicaciones, 2) * 0.5;
        
        // Calcula los puntos según el estatus IMSS
        if (imssStatus === "hijo") {
            puntaje += 0.75;
        } else if (imssStatus === "trabajador") {
            puntaje += 1;
        }
        
        // Mostrar el resultado
        resultContainer.innerHTML = `Tu Puntaje IMSS es: <span id="puntaje-imss">${puntaje.toFixed(2)}</span>/100`;
    });
});



  
  
