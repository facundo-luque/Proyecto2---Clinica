function mostrarFormulario(tipoUsuario) {
  const medicoForm = document.getElementById('medicoForm');
  const pacienteForm = document.getElementById('pacienteForm');

  if (tipoUsuario === 'medico') {
    medicoForm.style.display = 'block';
    pacienteForm.style.display = 'none';
  } else if (tipoUsuario === 'paciente') {
    medicoForm.style.display = 'none';
    pacienteForm.style.display = 'block';
  }
}

function autenticarUsuario(tipoUsuario) {
  const usuarioField = tipoUsuario === 'medico' ? 'medicoUsuario' : 'pacienteUsuario';
  const contrasenaField = tipoUsuario === 'medico' ? 'medicoContrasena' : 'pacienteContrasena';

  const usuario = document.getElementById(usuarioField).value;
  const contrasena = document.getElementById(contrasenaField).value;

  // Simulación de autenticación
  if (usuario === 'medico' && contrasena === 'contrasena' && tipoUsuario === 'medico') {
    window.location.href = '../pages/TurnosMedicos.html'; // Redirigir al html del médico
    return false; // Evitar que el formulario se envíe
  } else if (usuario === 'paciente' && contrasena === 'contrasena' && tipoUsuario === 'paciente') {
    window.location.href = 'dashboard_paciente.html'; // Redirigir al html del paciente
    return false; // Evitar que el formulario se envíe
  } else {
    document.getElementById('mensajeError').innerText = 'Credenciales incorrectas. Inténtalo de nuevo.';
    return false; // Evitar que el formulario se envíe
  }
}