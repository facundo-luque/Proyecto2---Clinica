document.addEventListener('DOMContentLoaded', function () {
    const btnBorrarDatos = document.getElementById('btnBorrarDatos');
  
    if (btnBorrarDatos) {
      btnBorrarDatos.addEventListener('click', function () {
        if (confirm('¿Estás seguro de que deseas borrar todos los datos?')) {
          borrarDatos();
        }
      });
    }
  });
  
  function borrarDatos() {
    localStorage.clear();
    alert('Todos los datos han sido borrados del localStorage.');
  }
  