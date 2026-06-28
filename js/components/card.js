function crearCard(producto){

    const precio = typeof producto.precio === "object"
    ? producto.precio.media
    : producto.precio;

    return `

    <article class="menu-card" data-id="${producto.id}">

        <img src="${producto.imagen}" alt="${producto.nombre}">

        <div class="menu-info">

            ${producto.destacado ? `<span class="badge">⭐ Más elegida</span>` : ""}

            <h3>${producto.nombre}</h3>

            <p>

${typeof producto.precio === "object" ? "Desde" : "Precio"}

</p>

            <div class="price">

                <span>$${precio.toLocaleString("es-AR")}</span>
<div class="card-link">

    Ver detalle →

</div>
            </div>

        </div>

    </article>

    `;

}