const modal = document.getElementById("product-modal");

const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalPrice = document.getElementById("modal-price");
const modalWhatsapp = document.getElementById("modal-whatsapp");

let productoActual = null;
let tamañoActual = "entera";

function abrirModal(producto){

    productoActual = producto;

    tamañoActual = "entera";

    modalImage.src = producto.imagen;

    modalTitle.textContent = producto.nombre;

    modalDescription.textContent = producto.descripcion;

    actualizarPrecio();

    modal.classList.add("active");

}

function actualizarPrecio(){

    let precio;

    if(typeof productoActual.precio === "object"){

        precio = productoActual.precio[tamañoActual];

        document.querySelector(".size-selector").style.display = "flex";

    }else{

        precio = productoActual.precio;

        document.querySelector(".size-selector").style.display = "none";

    }

    modalPrice.textContent =
        "$" + precio.toLocaleString("es-AR");

}

document.querySelector(".close-modal").onclick=()=>{

    modal.classList.remove("active");

}

window.onclick=(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

    }

}
const btnMedia = document.getElementById("btn-media");
const btnEntera = document.getElementById("btn-entera");

btnMedia.onclick = () => {

    tamañoActual = "media";

    btnMedia.classList.add("active-size");
    btnEntera.classList.remove("active-size");

    actualizarPrecio();

};

btnEntera.onclick = () => {

    tamañoActual = "entera";

    btnEntera.classList.add("active-size");
    btnMedia.classList.remove("active-size");

    actualizarPrecio();

};