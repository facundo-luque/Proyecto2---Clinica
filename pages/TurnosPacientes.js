const logeo = JSON.parse(localStorage.getItem("logeo"))

let areaModifica = document.querySelector("#areaModifica");
let fechaModifica = document.querySelector("#fechaModifica");
let horarioModifica = document.querySelector("#horarioModifica");

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

function creaFnModifica(parametro) {
  let ModalFooter = document.querySelector(".modal-footer");

  ModalFooter.innerHTML = `
 
     <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
     <button type="button" class="btn btn-primary" onclick = "modificarTurno(${parametro})">Modificar</button>
     
     
     `;

  let modal_body = document.querySelector(".moda-body");

  areaModifica.value = JSON.parse(localStorage.getItem(`${parametro - 1}`)).consulta;
  fechaModifica.value = JSON.parse(localStorage.getItem(`${parametro - 1}`)).fecha;
  horarioModifica.value = JSON.parse(localStorage.getItem(`${parametro - 1}`)).hora;
}

function modificarTurno(parametro) {
  let areaModifica1 = document.querySelector("#areaModifica");
  let fechaModifica1 = document.querySelector("#fechaModifica");
  let horarioModifica1 = document.querySelector("#horarioModifica");

  let ModificaObjeto = JSON.parse(localStorage.getItem(`${parametro - 1}`));

  ModificaObjeto.consulta = areaModifica1.value;
  ModificaObjeto.fecha = fechaModifica1.value;
  ModificaObjeto.hora = horarioModifica1.value;

  if (!areaModifica1.value) {
    return alert("La consulta ingresada no es correcta");
  }

  if (!fechaModifica1.value) {
    return alert("Ingrese una fecha correcta");
  }

  if (
    !(
      horarioModifica1.value >=  Number (ModificaObjeto.entrada) &&
      horarioModifica1.value <= Number(ModificaObjeto.salida) 
    )
  ) {
    return alert("El horario elegido es incorrecto");
  }

  localStorage.setItem(`${parametro - 1}`, JSON.stringify(ModificaObjeto));

  cargaPag();
}

let tbody = document.querySelector("#tbody");
let mensaje = document.querySelector(".mensaje");
let usuarioPaciente = document.querySelector("#InputBusqueda")
let buttonBusqueda = document.querySelector("#ButtonBusqueda")


/*buttonBusqueda.addEventListener ("click", ()=> {*/


  for (let index = 0; index <= 50; index++) {
    let contador = String(index);
    let parametro = index + 1;
    parametro = String(parametro);
  
   
   
    if (JSON.parse(localStorage.getItem(contador))) {
      const InfoPaciente = JSON.parse(localStorage.getItem(contador))
  
    
      
  
      if (InfoPaciente.loginPaciente == logeo.usuario && InfoPaciente.tipoUsuario === "consulta") {
        tbody.innerHTML += `
        <tr id=${parametro} >
        <td scope="row">${InfoPaciente.NombreMedico} ${InfoPaciente.ApellidoMedico} </td>
        <td scope="row">${InfoPaciente.EspecialidadMedico} </td>
        <td scope="row">${InfoPaciente.fecha} </td>
        <td scope="row">${InfoPaciente.hora} Hs.</td>
        
        <td scope="row">  
        <button class="btn btn-danger btn-sm" onclick="borrarfila(${parametro})">Cancelar Turno</button>
        <button type="button" class="btn btn-success btn-sm" " data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="creaFnModifica(${parametro})" >Modificar Turno</button>
        
        </td>
       
        </tr>
        
        `;
      }
    }
    }

//})




 


if (localStorage.length === 0 || tbody == "") {
  mensaje.innerHTML = `<h4>No Existen turnos disponibles...</h4>`;
}




