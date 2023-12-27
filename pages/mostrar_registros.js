document.addEventListener("DOMContentLoaded", function () {
  mostrarRegistros();
});

function mostrarRegistros() {
  const listaPacientes = document.getElementById("listaPacientes");
  const listaDoctores = document.getElementById("listaDoctores");

  // Obtener registros de pacientes y doctores
  const pacientes = obtenerRegistros("paciente");
  const doctores = obtenerRegistros("profesional");

  // Mostrar registros en tablas Bootstrap
  mostrarTabla(listaPacientes, pacientes, "paciente");
  mostrarTabla(listaDoctores, doctores, "profesional");
}

function generarIdUnico() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function obtenerRegistros(tipoUsuario) {
  const registros = [];
  // Iterar a través de localStorage y obtener los registros del tipo de usuario
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));

    if (value && value.tipoUsuario === tipoUsuario) {
      registros.push(value);
    }
  }
  return registros;
}

function mostrarTabla(contenedor, registros, tipoUsuario) {
  const tabla = document.createElement("table");
  tabla.className = "table table-bordered";

  registros.sort((a, b) => b.id - a.id);



  // Crear el encabezado de la tabla
  const encabezado = document.createElement("thead");
  const encabezadoFila = document.createElement("tr");
  Object.keys(registros[0]).forEach((columna) => {
    const th = document.createElement("th");
    th.textContent = columna.charAt(0).toUpperCase() + columna.slice(1); // Capitalizar la primera letra
    encabezadoFila.appendChild(th);
  });

  const registrosMostrados = registros.slice(0, 20);


  // Agregar columnas adicionales para "Editar" y "Borrar"
  const accionesTh = document.createElement("th");
  accionesTh.textContent = "Acciones";
  encabezadoFila.appendChild(accionesTh);

  encabezado.appendChild(encabezadoFila);
  tabla.appendChild(encabezado);

  // Crear el cuerpo de la tabla
  const cuerpoTabla = document.createElement("tbody");
  registros.forEach((registro) => {
    const fila = document.createElement("tr");
    fila.setAttribute("data-registro-id", registro.id);
    Object.values(registro).forEach((valor) => {
      const celda = document.createElement("td");
      celda.textContent = valor;
      fila.appendChild(celda);
    });

    // Añadir botones de "Editar" y "Borrar"
    const accionesTd = document.createElement("td");

    const btnEditar = document.createElement("button");
    btnEditar.className = "btn btn-warning btn-sm mr-1";
    btnEditar.textContent = "Editar";
    btnEditar.setAttribute("data-toggle", "modal");
    btnEditar.setAttribute("data-target", "#editarModal");
    btnEditar.addEventListener("click", function () {
      cargarDatosEdicion(registroId, tipoUsuario);
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.className = "btn btn-danger btn-sm";
    btnBorrar.textContent = "Borrar";
    btnBorrar.addEventListener("click", function () {
      // Borrar el registro
      if (
        confirm(
          `¿Estás seguro de que deseas borrar este registro de ${tipoUsuario}?`
        )
      ) {
        borrarRegistro(registro);
        mostrarRegistros(); // Vuelve a mostrar la tabla después de borrar un registro
      }
    });

    accionesTd.appendChild(btnEditar);
    accionesTd.appendChild(btnBorrar);
    fila.appendChild(accionesTd);

    cuerpoTabla.appendChild(fila);
  });
  tabla.appendChild(cuerpoTabla);

  // Agregar la tabla al contenedor especificado
  contenedor.innerHTML = ''; // Limpiar el contenido actual antes de agregar la nueva tabla
  contenedor.appendChild(tabla);
}

function borrarRegistro(registro) {
  // Encuentra el índice del registro a borrar en localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));

    if (JSON.stringify(value) === JSON.stringify(registro)) {
      // Elimina el registro de localStorage
      localStorage.removeItem(key);
      break;
    }
  }
}

function cargarDatosEdicion(registroId, tipoUsuario) {
    const formularioEdicion = document.getElementById('formularioEdicion');
    formularioEdicion.innerHTML = ''; // Limpiar el formulario de edición

    const registro = obtenerRegistroPorId(registroId);
  
    // Crear campos de formulario según el tipo de usuario
    Object.keys(registro).forEach(columna => {
      const divFormGroup = document.createElement('div');
      divFormGroup.className = 'form-group';
  
      const label = document.createElement('label');
      label.textContent = `${columna.charAt(0).toUpperCase() + columna.slice(1)}: `;
  
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'form-control';
      input.name = columna;
      input.value = registro[columna];
  
      divFormGroup.appendChild(label);
      divFormGroup.appendChild(input);
  
      formularioEdicion.appendChild(divFormGroup);
    });
  
    // Guardar el registro y tipo de usuario en atributos del formulario para su referencia en guardarCambios
    formularioEdicion.setAttribute('data-registro-id', registroId);
    formularioEdicion.setAttribute('data-tipo-usuario', tipoUsuario);
  }
  
  function guardarCambios() {
    const formularioEdicion = document.getElementById('formularioEdicion');
    const registroId = formularioEdicion.getAttribute('data-registro-id');
    const tipoUsuario = formularioEdicion.getAttribute('data-tipo-usuario');
    const registro = obtenerRegistroPorId(registroId);
  
    // Actualizar el registro con los nuevos valores del formulario de edición
    formularioEdicion.querySelectorAll('input').forEach(input => {
      registro[input.name] = input.value;
    });
  
    // Actualizar el registro en el localStorage
    localStorage.setItem(registroId, JSON.stringify(registro));
  
    // Cerrar el modal de edición
    $('#editarModal').modal('hide');
  
    // Volver a mostrar la tabla después de editar un registro
    
    mostrarRegistros();
  }
  
  function obtenerRegistroPorId(id) {
    const key = localStorage.key(id);
    return JSON.parse(localStorage.getItem(key));
  }

  document.addEventListener('DOMContentLoaded', function () {
    mostrarRegistros();
  });