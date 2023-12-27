document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
  
    if (userForm) {
      userForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const tipoUsuario = userForm.getAttribute('data-tipo-usuario');
  
        const nombreApellido = document.getElementById('nombreApellido').value;
  
        localStorage.setItem('tipoUsuario', tipoUsuario);
        localStorage.setItem('nombreApellido', nombreApellido);
  
        if (tipoUsuario === 'paciente') {
          const dni = document.getElementById('dni').value;
          const direccion = document.getElementById('direccion').value;
          const obraSocial = document.getElementById('obraSocial').value;
          const enfermedadBase = document.querySelector('input[name="enfermedadBase"]:checked').value;
          const enfermedadDetalle = document.getElementById('enfermedadDetalle').value;
  
          localStorage.setItem('dni', dni);
          localStorage.setItem('direccion', direccion);
          localStorage.setItem('obraSocial', obraSocial);
          localStorage.setItem('enfermedadBase', enfermedadBase);
          localStorage.setItem('enfermedadDetalle', enfermedadDetalle);
        } else if (tipoUsuario === 'profesional') {
          const matricula = document.getElementById('matricula').value;
          const especialidad = document.getElementById('especialidad').value;
  
          localStorage.setItem('matricula', matricula);
          localStorage.setItem('especialidad', especialidad);
        }
  
        alert(`Registro exitoso. ¡Gracias por registrarse como ${tipoUsuario}!`);
      });
    }
  });
  