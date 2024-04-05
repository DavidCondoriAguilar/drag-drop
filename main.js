"use strict";
let productos = document.querySelectorAll("#almacen img");
let vCarrito = document.getElementById("carrito");
let vAlmacen = document.getElementById("almacen");

for (let i = 0; i < productos.length; i++) {
  productos[i].setAttribute("draggable", "true");
  productos[i].setAttribute("id", "producto" + i);
  productos[i].addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("articulo", event.target.id);
  });
}

vCarrito.addEventListener("dragover", (event) => {
  event.preventDefault();
});

vCarrito.addEventListener("drop", (event) => {
  event.preventDefault();
  if (event.target.className == "caja") {
    let data = event.dataTransfer.getData("articulo");
    event.target.appendChild(document.getElementById(data));
  }
});

vAlmacen.addEventListener("dragover", (event) => {
  event.preventDefault();
});

vAlmacen.addEventListener("drop", (event) => {
  event.preventDefault();
  if (event.target.className == "caja") {
    let data = event.dataTransfer.getData("articulo");
    event.target.appendChild(document.getElementById(data));
  }
});
