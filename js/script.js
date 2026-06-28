// ============================================
// HEADER
// ============================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// ============================================
// CARTA
// ============================================

const container = document.getElementById("menu-container");

const botones = document.querySelectorAll(".filter");

let categoriaActual = "pizzas";

function mostrarCategoria(categoria){

    categoriaActual = categoria;

    container.style.opacity = 0;

setTimeout(()=>{

    container.innerHTML="";

    const productos = menu[categoria] || [];

    if(productos.length===0){

        container.innerHTML=`
            <p style="text-align:center;color:white;padding:40px;">
                Próximamente...
            </p>
        `;

        container.style.opacity=1;

        return;

    }

    productos.forEach(producto=>{

        container.innerHTML += crearCard(producto);

    });

    activarEventosTarjetas();

    container.style.opacity=1;

},200);

    const productos = menu[categoria] || [];

    if(productos.length === 0){

        container.innerHTML = `
            <p style="text-align:center;color:white;padding:40px;">
                Próximamente encontrarás productos en esta categoría.
            </p>
        `;

        return;

    }

    productos.forEach(producto=>{

        container.innerHTML += crearCard(producto);

    });

    activarEventosTarjetas();

}

function activarEventosTarjetas(){

    document.querySelectorAll(".menu-card").forEach(card=>{

        card.addEventListener("click",()=>{

            const producto = menu[categoriaActual].find(

                p => p.id == card.dataset.id

            );

            abrirModal(producto);

        });

    });

}

mostrarCategoria("pizzas");

botones.forEach(boton=>{

    boton.addEventListener("click",()=>{

        botones.forEach(btn=>btn.classList.remove("active"));

        boton.classList.add("active");

        mostrarCategoria(boton.dataset.category);

    });

});

// ============================================
// MENÚ RESPONSIVE
// ============================================

const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// Cerrar al pulsar un enlace

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});