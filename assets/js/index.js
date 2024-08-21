precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio 
cantidad = document.querySelector(".cantidad")

function incrementar(){
    parrafo = document.querySelector("p .cantidad")
    cuenta = Number (parrafo.innerHTML)
    cuenta = cuenta + 1
    parrafo.innerHTML = cuenta
}
function decrementar() {
    parrafo = document.querySelector("p .cantidad");
    cuenta = Number(parrafo.innerHTML);
    cuenta = cuenta - 1;
    parrafo.innerHTML = cuenta;
}


