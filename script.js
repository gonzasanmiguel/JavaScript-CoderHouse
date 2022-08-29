let consulta = prompt("Desea realizar una compra? si / no");

while (consulta === "si") {
  cotizacion();
  consulta = prompt("Desea continuar? si / no");
}

function cotizacion() {
  let iphone = prompt(
    "Que iPhone te gustaria comprar?(11 - 12 - 13 - 13 Pro - 13 Pro Max)"
  );
  let valorDolar = 300;
  let tresCuotas = 1.2;
  let seisCuotas = 1.35;
  if (iphone === "11") {
    console.log("El equipo seleccionado sale 610usd");
    console.log("En pesos debería abonar", valorDolar * 610);
    console.log(
      "Puede abonarlo en tres cuotas sin interes de",
      parseInt(valorDolar * 610 * tresCuotas) / 3
    );
    console.log(
      "Puede abonarlo en seis cuotas sin interes de",
      parseInt(valorDolar * 610 * seisCuotas) / 6
    );
  } else if (iphone === "12") {
    console.log("El equipo seleccionado sale 700usd");
    console.log("En pesos debería abonar", valorDolar * 700);
    console.log(
      "Puede abonarlo en tres cuotas sin interes de",
      parseInt(valorDolar * 700 * tresCuotas) / 3
    );
    console.log(
      "Puede abonarlo en seis cuotas sin interes de",
      parseInt(valorDolar * 700 * seisCuotas) / 6
    );
  } else if (iphone === "13") {
    console.log("El equipo seleccionado sale 900usd");
    console.log("En pesos debería abonar", valorDolar * 900);
    console.log(
      "Puede abonarlo en tres cuotas sin interes de",
      parseInt(valorDolar * 900 * tresCuotas) / 3
    );
    console.log(
      "Puede abonarlo en seis cuotas sin interes de",
      parseInt(valorDolar * 900 * seisCuotas) / 6
    );
  } else if (iphone === "13 Pro") {
    console.log("El equipo seleccionado sale 1200usd");
    console.log("En pesos debería abonar", valorDolar * 1200);
    console.log(
      "Puede abonarlo en tres cuotas sin interes de",
      parseInt(valorDolar * 1200 * tresCuotas) / 3
    );
    console.log(
      "Puede abonarlo en seis cuotas sin interes de",
      parseInt(valorDolar * 1200 * seisCuotas) / 6
    );
  } else if (iphone === "13 Pro Max") {
    console.log("El equipo seleccionado sale 1400usd");
    console.log("En pesos debería abonar", valorDolar * 1400);
    console.log(
      "Puede abonarlo en tres cuotas sin interes de",
      parseInt(valorDolar * 1400 * tresCuotas) / 3
    );
    console.log(
      "Puede abonarlo en seis cuotas sin interes de",
      parseInt(valorDolar * 1400 * seisCuotas) / 6
    );
  } else {
    console.log("Por favor seleccione un equipo disponible.");
  }
}
