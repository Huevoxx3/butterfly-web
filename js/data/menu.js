const menu = {

    pizzas: [

        {
            id:1,
            nombre:"Muzzarella",
            descripcion:"Muzzarella, aceitunas verdes y orégano.",
            precio:{media:12750,entera:24500},
            destacado:false,
            imagen:"img/menu/pizzas/muzzarella.jpg"
        },

        {
            id:2,
            nombre:"Palmito",
            descripcion:"Jamón cocido, palmitos, salsa golf, aceitunas verdes y orégano.",
            precio:{media:15000,entera:29550},
            destacado:false,
            imagen:"img/menu/pizzas/palmito.jpg"
        },

        {
            id:3,
            nombre:"Margarita",
            descripcion:"Tomate fresco, albahaca, aceitunas negras y orégano.",
            precio:{media:14350,entera:28250},
            destacado:true,
            imagen:"img/menu/pizzas/margarita.jpg"
        },

        {
            id:4,
            nombre:"Rúcula",
            descripcion:"Rúcula, jamón crudo, aceitunas negras y orégano.",
            precio:{media:15750,entera:31150},
            destacado:true,
            imagen:"img/menu/pizzas/rucula.jpg"
        },

        {
            id:5,
            nombre:"Especial",
            descripcion:"Jamón cocido, morrones rojos asados, aceitunas verdes y orégano.",
            precio:{media:15000,entera:29550},
            destacado:true,
            imagen:"img/menu/pizzas/especial.jpg"
        },

        {
            id:6,
            nombre:"Tres Quesos",
            descripcion:"Muzzarella, queso azul, queso sardo, aceitunas verdes y orégano.",
            precio:{media:14350,entera:28250},
            destacado:false,
            imagen:"img/menu/pizzas/tresquesos.jpg"
        },

        {
            id:7,
            nombre:"Fugazzetta",
            descripcion:"Muzzarella, cebolla dorada, aceitunas negras y orégano.",
            precio:{media:14350,entera:28250},
            destacado:false,
            imagen:"img/menu/pizzas/fugazzetta.jpg"
        },

        {
            id:8,
            nombre:"Panceta y Huevo",
            descripcion:"Muzzarella, panceta ahumada, huevo frito, aceitunas negras y orégano.",
            precio:{media:15900,entera:31200},
            destacado:true,
            imagen:"img/menu/pizzas/panceta-huevo.jpg"
        }

    ],

    hamburguesas: [

{
    id:101,
    nombre:"Simple",
    descripcion:"Carne, queso cheddar, lechuga, tomate y mayonesa.",
    precio:14500,
    destacado:false,
    imagen:"img/menu/hamburguesas/simple.jpg"
},

{
    id:102,
    nombre:"Doble",
    descripcion:"Doble carne, doble cheddar, lechuga, tomate y salsa especial.",
    precio:18500,
    destacado:true,
    imagen:"img/menu/hamburguesas/doble.jpg"
},

{
    id:103,
    nombre:"Butterfly",
    descripcion:"Doble carne, cheddar, panceta, huevo y salsa Butterfly.",
    precio:21000,
    destacado:true,
    imagen:"img/menu/hamburguesas/butterfly.jpg"
}

],
    milanesas:[

{
    id:201,
    nombre:"Milanesa de Ternera",
    descripcion:"Con guarnición a elección.",
    precio:18500,
    destacado:true,
    imagen:"img/menu/milanesas/ternera.jpg"
},

{
    id:202,
    nombre:"Milanesa de Pollo",
    descripcion:"Con guarnición a elección.",
    precio:18000,
    destacado:false,
    imagen:"img/menu/milanesas/pollo.jpg"
},

{
    id:203,
    nombre:"Croque Madame",
    descripcion:"Jamón, queso, salsa blanca y huevo.",
    precio:21500,
    destacado:true,
    imagen:"img/menu/milanesas/croque.jpg"
},

{
    id:204,
    nombre:"Agregado Napolitana",
    descripcion:"Tomate, jamón y muzzarella.",
    precio:3500,
    destacado:false,
    imagen:"img/menu/milanesas/napolitana.jpg"
}

],
    minutas: [],
    fritas:[

{
    id:301,
    nombre:"Papas Clásicas",
    descripcion:"Porción de papas fritas.",
    precio:8500,
    destacado:false,
    imagen:"img/menu/papas/clasicas.jpg"
},

{
    id:302,
    nombre:"Papas Cheddar",
    descripcion:"Cheddar fundido y panceta crocante.",
    precio:11500,
    destacado:true,
    imagen:"img/menu/papas/cheddar.jpg"
},

{
    id:303,
    nombre:"Papas Butterfly",
    descripcion:"Cheddar, panceta, verdeo y salsa especial.",
    precio:13500,
    destacado:true,
    imagen:"img/menu/papas/butterfly.jpg"
}

],
    picadas:[

{
    id:401,
    nombre:"Picada Clásica",
    descripcion:"Fiambres y quesos seleccionados.",
    precio:24000,
    destacado:true,
    imagen:"img/menu/picadas/clasica.jpg"
},

{
    id:402,
    nombre:"Cazuela de Queso",
    descripcion:"Queso fundido servido caliente.",
    precio:13500,
    destacado:false,
    imagen:"img/menu/picadas/queso.jpg"
},

{
    id:403,
    nombre:"Cazuela de Salame",
    descripcion:"Salame regional caliente.",
    precio:13500,
    destacado:false,
    imagen:"img/menu/picadas/salame.jpg"
}

],
    sandwiches:[

{
    id:601,
    nombre:"Sándwich de Bondiola",
    descripcion:"Bondiola desmenuzada con lechuga, tomate y mayonesa.",
    precio:16500,
    destacado:true,
    imagen:"img/menu/sandwiches/bondiola.jpg"
},

{
    id:602,
    nombre:"Sándwich de Jamón Crudo",
    descripcion:"Jamón crudo, rúcula, queso y tomate.",
    precio:17000,
    destacado:false,
    imagen:"img/menu/sandwiches/jamon-crudo.jpg"
}

],
    tostones:[

{
    id:701,
    nombre:"Tostón Caprese",
    descripcion:"Tomate, muzzarella y albahaca.",
    precio:9500,
    destacado:false,
    imagen:"img/menu/tostones/caprese.jpg"
},

{
    id:702,
    nombre:"Tostón Jamón Crudo",
    descripcion:"Jamón crudo, rúcula y queso.",
    precio:10500,
    destacado:true,
    imagen:"img/menu/tostones/jamon-crudo.jpg"
},

{
    id:703,
    nombre:"Tostón Butterfly",
    descripcion:"Especial de la casa.",
    precio:11000,
    destacado:true,
    imagen:"img/menu/tostones/butterfly.jpg"
}

],
    pastas:[

{
    id:801,
    nombre:"Sorrentinos",
    descripcion:"Con salsa a elección.",
    precio:17000,
    destacado:true,
    imagen:"img/menu/pastas/sorrentinos.jpg"
},

{
    id:802,
    nombre:"Ravioles",
    descripcion:"Con salsa a elección.",
    precio:16500,
    destacado:false,
    imagen:"img/menu/pastas/ravioles.jpg"
},

{
    id:803,
    nombre:"Ñoquis",
    descripcion:"Con salsa a elección.",
    precio:16000,
    destacado:false,
    imagen:"img/menu/pastas/noquis.jpg"
}

],
   ensaladas:[

{
    id:901,
    nombre:"Ensalada Mixta",
    descripcion:"Lechuga, tomate y cebolla.",
    precio:9000,
    destacado:false,
    imagen:"img/menu/ensaladas/mixta.jpg"
},

{
    id:902,
    nombre:"Ensalada Completa",
    descripcion:"Lechuga, tomate, zanahoria, huevo y queso.",
    precio:12500,
    destacado:true,
    imagen:"img/menu/ensaladas/completa.jpg"
}

],
    cervezas:[

{
    id:1101,
    nombre:"Pinta",
    descripcion:"Consultá las variedades disponibles en nuestras canillas.",
    precio:7000,
    destacado:true,
    imagen:"img/menu/cervezas/pinta.jpg"
},

{
    id:1102,
    nombre:"1/2 Pinta",
    descripcion:"La misma cerveza, en formato media pinta.",
    precio:5000,
    destacado:false,
    imagen:"img/menu/cervezas/media-pinta.jpg"
}

],
   alcohol:[

{
    id:1201,
    nombre:"Fernet",
    descripcion:"Fernet con gaseosa.",
    precio:8000,
    destacado:true,
    imagen:"img/menu/alcohol/fernet.jpg"
},

{
    id:1202,
    nombre:"Campari",
    descripcion:"Campari con jugo o gaseosa.",
    precio:8000,
    destacado:false,
    imagen:"img/menu/alcohol/campari.jpg"
},

{
    id:1203,
    nombre:"Gin Tonic",
    descripcion:"Gin con agua tónica.",
    precio:9500,
    destacado:true,
    imagen:"img/menu/alcohol/gin-tonic.jpg"
},

{
    id:1204,
    nombre:"Aperol Spritz",
    descripcion:"Aperol, espumante y soda.",
    precio:9500,
    destacado:true,
    imagen:"img/menu/alcohol/aperol.jpg"
},

{
    id:1205,
    nombre:"Cuba Libre",
    descripcion:"Ron, Coca-Cola y limón.",
    precio:9000,
    destacado:false,
    imagen:"img/menu/alcohol/cuba-libre.jpg"
}

],
    bebidas:[

{
    id:1301,
    nombre:"Gaseosa",
    descripcion:"Línea Coca-Cola.",
    precio:3500,
    destacado:false,
    imagen:"img/menu/bebidas/gaseosa.jpg"
},

{
    id:1302,
    nombre:"Agua Mineral",
    descripcion:"Con o sin gas.",
    precio:3000,
    destacado:false,
    imagen:"img/menu/bebidas/agua.jpg"
},

{
    id:1303,
    nombre:"Jugo",
    descripcion:"Sabores disponibles según stock.",
    precio:3500,
    destacado:false,
    imagen:"img/menu/bebidas/jugo.jpg"
}

],
   postres:[

{
    id:1001,
    nombre:"Flan Casero",
    descripcion:"Con dulce de leche y crema.",
    precio:7000,
    destacado:true,
    imagen:"img/menu/postres/flan.jpg"
},

{
    id:1002,
    nombre:"Brownie con Helado",
    descripcion:"Brownie tibio con helado de crema.",
    precio:8500,
    destacado:true,
    imagen:"img/menu/postres/brownie.jpg"
},

{
    id:1003,
    nombre:"Helado",
    descripcion:"Dos bochas a elección.",
    precio:6500,
    destacado:false,
    imagen:"img/menu/postres/helado.jpg"
}

],

};