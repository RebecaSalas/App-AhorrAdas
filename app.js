// Ir a balance, categoría ó reportes
let balanceLink = document.getElementById("clic-balance");
let categoriasLink = document.getElementById("clic-categorias");
let reportesLink = document.getElementById("clic-reportes");

// Enlaces
balanceLink.addEventListener("click", function() {
  alert("Haz clic en Balance");
});

categoriasLink.addEventListener("click", function() {
  alert("Haz clic en Categorías");
});

reportesLink.addEventListener("click", function() {
  alert("Haz clic en Reportes");
});



// filtros
var filtros = document.getElementById("filtros");

// "Ocultar filtros"
var ocultarFiltros = document.getElementById("ocultar-filtros");

ocultarFiltros.addEventListener("click", function() {  // Ocultar filtros si está visible
  
  if (filtros.style.display !== "none") {
    filtros.style.display = "none";
    ocultarFiltros.innerHTML = "Mostrar filtros";
  } else { // De lo contrario, mostrar
    filtros.style.display = "block";
    ocultarFiltros.innerHTML = "Ocultar filtros"; 
  }
});



// Nueva operación
const btnNuevaOperacion = document.getElementById("click-operacion");
btnNuevaOperacion.addEventListener("click", () => {
  window.location.href = "nueva_operacion.html";
});



// Sección de categorías

//Agregar categoría

const agregarBoton = document.getElementById('agregar-categoria-boton');
const inputCategoria = document.getElementById('input');
const listaCategorias = document.getElementById('lista');

agregarBoton.addEventListener('click', function() {
  const nuevaCategoria = inputCategoria.value;
  
  // lista de categorías existente de localStorage
  let categorias = JSON.parse(localStorage.getItem('categorias')) || [];
  
  // Agregar nueva categoría a la lista
  categorias.push(nuevaCategoria);
  
  // Actualizamos localStorage con la lista de categorías actualizada
  localStorage.setItem('categorias', JSON.stringify(categorias));
  
  // Limpiar el campo de entrada
  inputCategoria.value = '';
  
  // Actualizar
  actualizarListaCategorias();
});


function actualizarListaCategorias() {
  
  let categorias = JSON.parse(localStorage.getItem('categorias')) || [];
  listaCategorias.innerHTML = '';
  

  categorias.forEach((categoria, indice) => {
    const nuevaCategoria = `
      <li id="elemento-${indice}">
        <p class="text">${categoria}</p>
        <i class="fas fa-trash de" data="eliminado" id="${indice}"></i>
        <i class="fa-sharp fa-solid fa-pen-to-square" data="editado" id="${indice}"></i>
      </li>
    `;
    listaCategorias.insertAdjacentHTML('beforeend', nuevaCategoria);
  });
}


// Editar categoría 

// Obtener elementos de la lista
const lista = document.getElementById('lista');
const elementos = document.getElementsByClassName('text');
const editarIconos = document.getElementsByClassName('fa-pen-to-square');

// Sección de edición de categoría
const vistaEditarCategoria = document.getElementById('editar-categoria');
const editarCategoriaInput = document.getElementById('editar-categoria-input');

// Controlador de evento para el icono de editar
const editarCategoria = (event) => {
  const categoria = event.target.parentNode.querySelector('.text').textContent;
  editarCategoriaInput.value = categoria;
  vistaEditarCategoria.classList.remove('is-hidden');
};

// Agregar evento de click a los iconos de editar
for (let i = 0; i < editarIconos.length; i++) {
  editarIconos[i].addEventListener('click', editarCategoria);
}


