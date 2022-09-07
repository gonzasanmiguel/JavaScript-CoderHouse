// let consulta = prompt("Desea realizar una compra? si / no");



// while (consulta === "si") {
//   cotizacion();
//   consulta = prompt("Desea continuar? si / no");
// }

// function cotizacion() {
//   let iphone = prompt(
//     "Que iPhone te gustaria comprar?(11 - 12 - 13 - 13 Pro - 13 Pro Max)"
//   );
//   let valorDolar = 300;
//   let tresCuotas = 1.2;
//   let seisCuotas = 1.35;
//   if (iphone === "11") {
//     console.log("El equipo seleccionado sale 610usd");
//     console.log("En pesos debería abonar", valorDolar * 610);
//     console.log(
//       "Puede abonarlo en tres cuotas sin interes de",
//       parseInt(valorDolar * 610 * tresCuotas) / 3
//     );
//     console.log(
//       "Puede abonarlo en seis cuotas sin interes de",
//       parseInt(valorDolar * 610 * seisCuotas) / 6
//     );
//   } else if (iphone === "12") {
//     console.log("El equipo seleccionado sale 700usd");
//     console.log("En pesos debería abonar", valorDolar * 700);
//     console.log(
//       "Puede abonarlo en tres cuotas sin interes de",
//       parseInt(valorDolar * 700 * tresCuotas) / 3
//     );
//     console.log(
//       "Puede abonarlo en seis cuotas sin interes de",
//       parseInt(valorDolar * 700 * seisCuotas) / 6
//     );
//   } else if (iphone === "13") {
//     console.log("El equipo seleccionado sale 900usd");
//     console.log("En pesos debería abonar", valorDolar * 900);
//     console.log(
//       "Puede abonarlo en tres cuotas sin interes de",
//       parseInt(valorDolar * 900 * tresCuotas) / 3
//     );
//     console.log(
//       "Puede abonarlo en seis cuotas sin interes de",
//       parseInt(valorDolar * 900 * seisCuotas) / 6
//     );
//   } else if (iphone === "13 Pro") {
//     console.log("El equipo seleccionado sale 1200usd");
//     console.log("En pesos debería abonar", valorDolar * 1200);
//     console.log(
//       "Puede abonarlo en tres cuotas sin interes de",
//       parseInt(valorDolar * 1200 * tresCuotas) / 3
//     );
//     console.log(
//       "Puede abonarlo en seis cuotas sin interes de",
//       parseInt(valorDolar * 1200 * seisCuotas) / 6
//     );
//   } else if (iphone === "13 Pro Max") {
//     console.log("El equipo seleccionado sale 1400usd");
//     console.log("En pesos debería abonar", valorDolar * 1400);
//     console.log(
//       "Puede abonarlo en tres cuotas sin interes de",
//       parseInt(valorDolar * 1400 * tresCuotas) / 3
//     );
//     console.log(
//       "Puede abonarlo en seis cuotas sin interes de",
//       parseInt(valorDolar * 1400 * seisCuotas) / 6
//     );
//   } else {
//     console.log("Por favor seleccione un equipo disponible.");
//   }
// }





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
  cargarOtroProducto = confirm("Queres seguir cargando productos?")
}



