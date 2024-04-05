"use strict";

let productos = document.querySelectorAll("#almacen img");
let vCarrito = document.getElementById("carrito");
let vAlmacen = document.getElementById("almacen");

for (let i = 0; i < productos.length; i++) {
  productos[i].setAttribute("draggable", "true");
  productos[i].setAttribute("id", "producto" + i);

  productos[i].addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("articulo", event.target.id);
    event.target.classList.add("dragging");
  });

  productos[i].addEventListener("dragend", (event) => {
    event.target.classList.remove("dragging"); // Quita la clase de estilo al soltar
  });
}

vCarrito.addEventListener("dragover", (event) => {
  event.preventDefault();
});

vAlmacen.addEventListener("dragover", (event) => {
  event.preventDefault();
});

function mostrarFeedback(mensaje) {
  // Mostrar mensaje de retroalimentación
  const feedback = document.getElementById("feedback");
  feedback.textContent = mensaje;
  feedback.style.display = "block";

  // Ocultar el mensaje después de 2 segundos (2000 milisegundos)
  setTimeout(() => {
    feedback.style.display = "none";
  }, 3000);
}

vCarrito.addEventListener("drop", (event) => {
  event.preventDefault();
  if (event.target.className == "caja") {
    let data = event.dataTransfer.getData("articulo");
    event.target.appendChild(document.getElementById(data));
    mostrarFeedback("Elemento agregado al carrito");
  }
});

vAlmacen.addEventListener("drop", (event) => {
  event.preventDefault();
  if (event.target.className == "caja") {
    let data = event.dataTransfer.getData("articulo");
    event.target.appendChild(document.getElementById(data));
    mostrarFeedback("Elemento agregado al almacen");
  }
});
