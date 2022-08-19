
// Primer ejercicio 

for(let i = 1 ; i <= 100 ; i++) {
         if (i % 3 === 0 & i % 5 === 0){
             console.log("FizBuzz")
     }
      else if (i % 3 === 0){
             console.log("Fizz")
     }
    else if (i % 5 === 0){
             console.log("Buzz")
     } else {
             console.log(i)
     }
 }

// Segundo ejercicio 


let entrada = parseInt(prompt("Ingresa un numero y obtene una comida"))

switch(entrada) {
     case 1:
         console.log("Elegiste un tomate")
         break;
     case 2:
         console.log("Elegiste una papa")
         break; 
     case 3:
         console.log("Elegiste carne")
         break;  
     case 4:
         console.log("Elegiste pollo")
         break;
    default:
         console.warn("No hay comida para ese numero. Por favor ingrese un numero del 1 al 4")    
}



//Tercer ejercicio  



let numero = parseInt(prompt("Ingrese un numero y te devolvemos su tabla de multiplicacion:"))

for(i=1; i <= 10; i++){
    console.log(numero * i)
}


