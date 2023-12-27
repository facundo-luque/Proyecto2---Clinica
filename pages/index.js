const logeo = JSON.parse(localStorage.getItem("logeo"))

let personas = [];


for (let index = 0; index <50; index++) {


  if (JSON.parse(localStorage.getItem(index)) !== null) {
    const objeto = JSON.parse(localStorage.getItem(index))
    
    personas.push(objeto)
   
    
  }


  
}

console.log(personas)


let input = document.querySelector("#input");
let button = document.querySelector("#button");
let container = document.querySelector(".container");
let checkbox = document.querySelector("#checkbox");

/* Funcion para habilitar o deshabilitar input */

checkbox.addEventListener("click",(e) => {

  if (checkbox.checked){
    input.disabled = true
  } else {
    input.disabled = false
  }

})



/* modal */

function modal(id) {
  let ModalFooter = document.querySelector(".modal-footer");
  let hora = document.querySelector("#hora");
  console.log (id)

  ModalFooter.innerHTML = `

    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
    <button type="button" class="btn btn-primary" onclick = "SolicitarTurno(${id})">Solicitar turno</button>
    
    
    `;
}

/* funcion solicitar turno */

function SolicitarTurno(id) {
  
  let horario = document.querySelector("#horario");
  const fecha = document.querySelector("#fecha");
  const NombreMedico = personas[id].nombreProf;
  const ApellidoMedico = personas[id].apellidoProf;
  const EspecialidadMedico = personas[id].especialidad;
  const Login = personas[id].usuarioProf;
  const hora = horario.value;
  const entrada = personas[id].entrada;
  const salida = personas[id].salida;
  const tipoUsuario = "consulta";
  //const loginPaciente = "fluque"

  const area = document.querySelector("#area");

  

  if (!(area.value)) {
    return alert ("La consulta ingresada no es correcta")
  }


  if (!(fecha.value)) {
    return alert("Ingrese una fecha correcta")
  }

  
  

  if (
    !(
      horario.value >= Number(personas[id].entrada ) &&
      horario.value <=  Number(personas[id].salida) 
    )
  ) {
    return alert("El horario elegido es incorrecto");
  }



 class InfoTurno   {
  constructor  (NombreMedico,ApellidoMedico,EspecialidadMedico,fecha,hora,consulta,login,entrada,salida,tipoUsuario,loginPaciente) {
    this.NombreMedico = NombreMedico,
    this.ApellidoMedico= ApellidoMedico,
    this.EspecialidadMedico = EspecialidadMedico,
    this.fecha =  fecha,
    this.hora = horario.value,
    this.consulta = area.value,
    this.login = Login,
    this.entrada = entrada,
    this.salida = salida,
    this.tipoUsuario= tipoUsuario,
    this.loginPaciente = loginPaciente

  }
 }

 const Turno   = new InfoTurno (NombreMedico,ApellidoMedico,EspecialidadMedico,fecha.value ,horario.value ,area.value,Login,entrada,salida,tipoUsuario, logeo.usuario/*loginPaciente*/)

  let identity = localStorage.length

  identity = String(identity)

  console.log (Turno)
  
  localStorage.setItem(identity, JSON.stringify(Turno));

  area.value = "";
  horario.value = "";
  fecha.value = "";
  
 
}

function HandleOnClick(event) {
  
  container.innerHTML = ""
  personas.forEach((persona) => {
    if (checkbox.checked && persona.tipoUsuario =="profesional") {
   
      

      container.innerHTML += `

      
  <div class="card mb-3" id =${persona.id}    style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-4">
          <img src="https://th.bing.com/th/id/OIP.hEImwL51XJAT3h-FViiHYQHaHa?rs=1&pid=ImgDetMain" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">Dr. ${persona.nombreProf} ${persona.apellidoProf}</h5>
            <p class="card-text">Especialista en ${persona.especialidad}</p>
            <p class="card-text"><small class="text-body-secondary">Horario de atencion: ${persona.entrada} a ${persona.salida} hs</small></p>
           
            <button type="button" id = "Consultar" onclick = "modal(${persona.id} )" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Consultar
          </button>

          </div>
        </div>
      </div>

     

    </div>
      
      
`;
      return;
    }

    if (persona.especialidad == input.value) {
      container.innerHTML += `
      <div class="card mb-3" id =${persona.id}    style="max-width: 600px;">
      <div class="row g-0">
        <div class="col-4">
          <img src="https://th.bing.com/th/id/OIP.hEImwL51XJAT3h-FViiHYQHaHa?rs=1&pid=ImgDetMain" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">Dr. ${persona.nombreProf} ${persona.apellidoProf}</h5>
            <p class="card-text">Especialista en ${persona.especialidad}</p>
            <p class="card-text"><small class="text-body-secondary">Horario de atencion: ${persona.entrada} a ${persona.salida} hs</small></p>
           
            <button type="button" id = "Consultar" onclick = "modal(${persona.id} )" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Consultar
          </button>

          </div>
        </div>
      </div>

     

    </div>
    
    `;
    }
  });

  input.value = "";
  
}

button.addEventListener("click", HandleOnClick);




