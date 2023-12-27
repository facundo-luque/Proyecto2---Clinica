function mostrarFormulario(tipoUsuario) {
  const medicoForm = document.getElementById("medicoForm");
  const pacienteForm = document.getElementById("pacienteForm");
  const adminForm = document.querySelector("#adminForm");

  if (tipoUsuario === "profesional") {
    medicoForm.style.display = "block";
    pacienteForm.style.display = "none";
  }
  if (tipoUsuario === "paciente") {
    medicoForm.style.display = "none";

    pacienteForm.style.display = "block";
  }
}
/*
function autenticarUsuario(tipoUsuario) {
  const usuarioField = tipoUsuario === 'medico' ? 'medicoUsuario' : 'pacienteUsuario';
  const contrasenaField = tipoUsuario === 'medico' ? 'medicoContrasena' : 'pacienteContrasena';

  const usuario = document.getElementById(usuarioField).value;
  const contrasena = document.getElementById(contrasenaField).value;

  // Simulación de autenticación
  if (usuario === 'medico' && contrasena === 'contrasena' && tipoUsuario === 'medico') {
    window.location.href = ''; // Redirigir al html del médico
    return false; // Evitar que el formulario se envíe
  } else if (usuario === 'paciente' && contrasena === 'contrasena' && tipoUsuario === 'paciente') {
    window.location.href = 'dashboard_paciente.html'; // Redirigir al html del paciente
    return false; // Evitar que el formulario se envíe
  } else {
    document.getElementById('mensajeError').innerText = 'Credenciales incorrectas. Inténtalo de nuevo.';
    return false; // Evitar que el formulario se envíe
  }
}

*/
class login{
  constructor(usuario,contraseña){
    this.usuario = usuario,
    this.contraseña = contraseña
  }
}

function autenticarUsuario(tipoUsuario) {
  let arrays = [];

 
  

  for (let index = 0; index < 50; index++) {
    if (JSON.parse(localStorage.getItem(index)) !== null) {
      const objeto = JSON.parse(localStorage.getItem(index));

      arrays.push(objeto);
    }
  }

  if (tipoUsuario === "profesional") {
    const medicoUsuario = document.querySelector("#medicoUsuario");
    const medicoContrasena = document.querySelector("#medicoContrasena");

    if (medicoUsuario.value ==="GermanValoy" && medicoContrasena.value === "1234") {

      const loginAdmin = new login (medicoUsuario.value,medicoContrasena.value)
      localStorage.setItem("logeo", JSON.stringify(loginAdmin))

      return window.open("http://127.0.0.1:5500/pages/lista_registros.html");


    }

    arrays.forEach((array) => {
      if (
        array.tipoUsuario == "profesional" &&
        array.usuarioProf == medicoUsuario.value &&
        array.contraseñaProf == medicoContrasena.value
      ) {
        //window.location.href

        const loginAdmin = new login (medicoUsuario.value,medicoContrasena.value)
        localStorage.setItem("logeo", JSON.stringify(loginAdmin))

        return window.open("http://127.0.0.1:5500/pages/TurnosMedicos.html");
      }
    });
  }

  if (tipoUsuario === "paciente") {
    const pacienteUsuario = document.querySelector("#pacienteUsuario");
    const pacienteContrasena = document.querySelector("#pacienteContrasena");

    if (pacienteUsuario.value ==="GermanValoy" && pacienteContrasena.value === "1234") {

      const loginAdmin = new login (pacienteUsuario.value,pacienteContrasena.value)
      localStorage.setItem("logeo", JSON.stringify(loginAdmin))
      return window.open("http://127.0.0.1:5500/pages/lista_registros.html");
    }

    arrays.forEach((array) => {
      if (
        array.tipoUsuario == "paciente" &&
        array.usuario == pacienteUsuario.value &&
        array.contraseña == pacienteContrasena.value
      ) {
        //window.location.href
        const loginAdmin = new login (pacienteUsuario.value,pacienteContrasena.value)
        localStorage.setItem("logeo", JSON.stringify(loginAdmin))
        return window.open("http://127.0.0.1:5500/pages/indexTurnos.html");
      }
    });
  }
}


