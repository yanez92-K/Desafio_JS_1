precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
cantidad = document.querySelector(".cantidad");

function incrementar() {
  parrafo = document.querySelector("p .cantidad");
  cuenta = Number(parrafo.innerHTML);
  cuenta = cuenta + 1;
  parrafo.innerHTML = cuenta;
}
function decrementar() {
  parrafo = document.querySelector("p .cantidad");
  cuenta = Number(parrafo.innerHTML);
  cuenta = cuenta - 1;
  parrafo.innerHTML = cuenta;
}

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  const precioSpan = document.querySelector(".precio-inicial").value;
  console.log("precioSpan-->>", precioSpan);
  const cantidad = document.querySelector(".cantidad").value;
  console.log("cantidad-->>", cantidad);
  const total = cuenta * precio;
  document.querySelector(".valor-total").innerHTML = total;
});
