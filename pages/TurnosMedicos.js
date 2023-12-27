const logeo = JSON.parse(localStorage.getItem("logeo"))



function cargaPag() {
  window.location.reload();
}

function borrarfila(parametro) {
  let llave = parametro - 1;
  llave = String(llave);
  const table = document.getElementById(`${parametro}`);

  table.remove();
  localStorage.removeItem(llave);
}
let tbody = document.querySelector("#tbody");
let mensaje = document.querySelector(".mensaje");
let long = localStorage.length;

long = long - 1;

for (let index = 0; index <= 10; index++) {
  let contador = String(index);
  let parametro = index + 1;
  parametro = String(parametro);

  if (JSON.parse(localStorage.getItem(contador))) {
    const InfoPaciente = JSON.parse(localStorage.getItem(contador));

    if (InfoPaciente) {
      if (InfoPaciente.login == logeo.usuario && InfoPaciente.tipoUsuario ==="consulta") {
        tbody.innerHTML += `
         <tr id=${parametro} >
         <td scope="row">${InfoPaciente.login} </td>
         <td scope="row">${InfoPaciente.consulta} </td>
         <td scope="row">${InfoPaciente.fecha} </td>
         <td scope="row">${InfoPaciente.hora} Hs.</td>
         
         <td scope="row">  
         <button class="btn btn-danger btn-sm" onclick="borrarfila(${parametro})">Rechazar Turno</button>
        
         
         </td>
        
         </tr>
         
         `;
      }
    }
  }
}

if (localStorage.length === 0 || tbody == "") {
  mensaje.innerHTML = `<h4>No Existen turnos disponibles...</h4>`;
}
