const thumbs = new Swiper(".gallery-thumbs", {

    spaceBetween:15,

    slidesPerView:6,

    freeMode:true,

    watchSlidesProgress:true,

});

const gallery = new Swiper(".gallery-slider", {

    loop:true,

    autoplay:{

        delay:4000,

        disableOnInteraction:false,

    },

    navigation:{

        nextEl:".swiper-button-next",

        prevEl:".swiper-button-prev",

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true,

    },

    thumbs:{

        swiper:thumbs,

    }

});

const galleryModal = document.getElementById("galleryModal");

const galleryGrid = document.getElementById("galleryGrid");

const openGallery = document.getElementById("openGallery");

const closeGallery = document.getElementById("closeGallery");

openGallery.addEventListener("click",()=>{

   galleryGrid.innerHTML="";

const fotos = document.querySelectorAll(".gallery-slider img");

fotos.forEach((img,index)=>{

    const foto=document.createElement("img");

    foto.src=img.src;

    foto.onclick=()=>abrirImagen(index);

    galleryGrid.appendChild(foto);

});

    galleryModal.classList.add("active");

});

closeGallery.addEventListener("click",()=>{

    galleryModal.classList.remove("active");

});
const viewer = document.getElementById("galleryViewer");

const viewerImg = document.getElementById("viewerImage");

const viewerClose = document.getElementById("viewerClose");

const viewerPrev = document.getElementById("viewerPrev");

const viewerNext = document.getElementById("viewerNext");

let currentIndex = 0;

let images = [];

function abrirImagen(index){

    images = [...document.querySelectorAll(".gallery-slider img")];

    currentIndex = index;

    viewerImg.src = images[currentIndex].src;

    viewer.classList.add("active");

}

// ==========================================
// VISOR
// ==========================================

viewerClose.addEventListener("click", () => {

    viewer.classList.remove("active");

});

viewerNext.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    viewerImg.src = images[currentIndex].src;

});

viewerPrev.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    viewerImg.src = images[currentIndex].src;

});

// Cerrar haciendo click fuera de la imagen

viewer.addEventListener("click", (e) => {

    if(e.target === viewer){

        viewer.classList.remove("active");

    }

});

// Cerrar con la tecla ESC

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        viewer.classList.remove("active");

    }

});