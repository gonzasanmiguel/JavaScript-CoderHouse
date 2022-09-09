
class iphone {
  constructor(nombre, capacidad, precio, disponibilidad){
    this.nombre = nombre
    this.capacidad = capacidad
    this.precio = precio
    this.disponibilidad = disponibilidad
  }
  habilitar(){
    let error = "iPhone disponible."
    if(this.disponibilidad == false){ 
      this.disponibilidad = true
    } else {
      console.log(error)
    }
  }
  desabilitar(){
    let error = "iPhone no disponible por el momento."
    if(this.disponibilidad == true){
      this.disponibilidad = false
    } else {
      console.log(error)
    }
  }
}


const store = []

// Meto los iPhones al array store

let iphone1 = new iphone("iPhone 11", "64gb", 600, true)
let iphone2 = new iphone("iPhone 12", "64gb", 800, true)
let iphone3 = new iphone("iPhone 13", "128gb", 900, false)
let iphone4 = new iphone("iPhone 13 Pro", "128gb", 1200, true)
let iphone5 = new iphone("iPhone 13 Pro Max", "128gb", 1400, false)


store.push(iphone1, iphone2, iphone3, iphone4, iphone5)


console.log(store)

iphone1.habilitar()

console.log(iphone1)

iphone5.desabilitar()

console.log(iphone5)



//filtrar por stock disponible


let stock = store.filter(iphones => iphones.disponibilidad == true)
console.log(stock)


//filtrar por precios menores a lo que ingresa el usuario.


let ingreso = Number(prompt("Ingrese el dinero disponible a gastar en dolares."))

let precioMenor = store.filter(menor => menor.precio <= ingreso)

console.log("Los equipos disponibles para vos son", precioMenor)


//Con esta funcion agrego iPhone de forma dinamica

function agregarIphone (){
    let nombreNuevo = prompt("Ingrese el nombre del iPhone a agregar")
    let gbNuevo = prompt("Qué capacidad tiene? (GB)")
    let precioNuevo = Number(prompt("Ingrese el precio en dólares"))
    let disponibilidadNuevo = confirm("Ingrese si está disponible actualmente")
    let iphoneNuevo = new iphone (iphoneNuevo, gbNuevo, precioNuevo, disponibilidadNuevo, iphoneNuevo)

   store.push(iphoneNuevo)
   console.table(agregarIphone) 
}


let cargarOtroProducto = prompt("Desea agregar otro producto?").toUpperCase
while(cargarOtroProducto == "SI "){
  agregarIphone()
  cargarOtroProducto = confirm("Queres seguir cargando productos?").toUpperCase()
}



