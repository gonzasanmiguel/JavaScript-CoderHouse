// class iphone {
//   constructor(id, nombre, capacidad, precio, disponibilidad){
//     this.id = id
//     this.nombre = nombre
//     this.capacidad = capacidad
//     this.precio = precio
//     this.disponibilidad = disponibilidad
//   }
//   habilitar(){
//     let error = "iPhone disponible."
//     if(this.disponibilidad == false){
//       this.disponibilidad = true
//     } else {
//       console.log(error)
//     }
//   }
//   desabilitar(){
//     let error = "iPhone no disponible por el momento."
//     if(this.disponibilidad == true){
//       this.disponibilidad = false
//     } else {
//       console.log(error)
//     }
//   }
// }

// Meto los iPhones al array store

// let iphone1 = new iphone(1,"iPhone 11", "64gb", 600, true)
// let iphone2 = new iphone(2,"iPhone 12", "64gb", 800, true)
// let iphone3 = new iphone(3,"iPhone 13", "128gb", 900, false)
// let iphone4 = new iphone(4,"iPhone 13 Pro", "128gb", 1200, true)
// let iphone5 = new iphone(5,"iPhone 13 Pro Max", "128gb", 1400, false)

// store.push(iphone1, iphone2, iphone3, iphone4, iphone5)

// console.log(store)

// iphone1.habilitar()

// console.log(iphone1)

// iphone5.desabilitar()

// console.log(iphone5)

//filtrar por stock disponible

// let stock = store.filter(iphones => iphones.disponibilidad == true)
// console.log(stock)

//filtrar por precios menores a lo que ingresa el usuario.

// let ingreso = Number(prompt("Ingrese el dinero disponible a gastar en dolares."))

// let precioMenor = store.filter(menor => menor.precio <= ingreso)

// console.log("Los equipos disponibles para vos son", precioMenor)

//Con esta funcion agrego iPhone de forma dinamica

// function agregarIphone (){
//     let nombreNuevo = prompt("Ingrese el nombre del iPhone a agregar")
//     let gbNuevo = prompt("Qué capacidad tiene? (GB)")
//     let precioNuevo = Number(prompt("Ingrese el precio en dólares"))
//     let disponibilidadNuevo = confirm("Ingrese si está disponible actualmente")
//     let iphoneNuevo = new iphone (iphoneNuevo, gbNuevo, precioNuevo, disponibilidadNuevo, iphoneNuevo)

//    store.push(iphoneNuevo)
//    console.table(agregarIphone)
// }

// let cargarOtroProducto = prompt("Desea agregar otro producto?").toUpperCase
// while(cargarOtroProducto == "SI "){
//   agregarIphone()
//   cargarOtroProducto = confirm("Queres seguir cargando productos?").toUpperCase()
// }

const Productos = [
  {
    id: 1,
    name: "iPhone 11",
    price: "120.000",
    description: "iphone-11",
  },
  {
    id: 2,
    name: "iPhone 12 pro",
    price: "150.000",
    description: "iphone-12-pro",
  },
  {
    id: 3,
    name: "iPhone 13 pro",
    price: "200.000",
    description: "iphone-13-pro",
  },
];

const carrito = [];

const cargarCarrito = (carrito) => {
  let carritoContainer = document.querySelector("#carrito");

  let container = document.querySelector("#cartContainer");
  if (container) {
    container.parentNode.removeChild(container);
  }

  let div = document.createElement("div");
  div.setAttribute("id", "carritoContainer");
  div.innerHTML += `<h2>Carrito de compra: </h2>`;
  for (const producto of carrito) {
    div.innerHTML += `
    <div class="carrito-item">
      <h4>Producto: ${producto.name}</h4>
      <h4>Precio: ${producto.price}</h4>
      <h4>Cantidad: ${producto.cantidad}</h4>
    </div>
    `;
  }
  carritoContainer.appendChild(div);
};

const cargarEventos = () => {
  let buttons = document.querySelectorAll(".button");
  for (const button of buttons) {
    button.addEventListener("click", () => {
      let prod = carrito.find(product => product.id == button.id);
      if (prod) {
        prod.cantidad++;
      } else {
        let prod = Productos.find((product) => product.id == button.id);
        if (prod) {
          let nuevoProducto = {
            id: 1,
            name: prod.nombre,
            price: prod.price,
            description: prod.description,
            cantidad: 1,
          };
          carrito.push(nuevoProducto)
        }
      }
      cargarCarrito(carrito);
    });
  }
};


const cargarProductos = (Productos) => {
  let container = document.querySelector("#container");
  for (const producto of Productos) { 
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    div.innerHTML = `
    <h3>$${Producto.price}</h3>
    <h4>${Producto.name}</h4>
    <button class="boton" id= "${Producto.id}" >Agregar al carrito</button>
    `;
    container.appendChild(div);
  }
  //CARGA DE EVENTOS
  cargarEventos();
};

cargarProductos(Productos);
cargarCarrito();
