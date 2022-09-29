// cargar celulares select

    

const cargarCombo = (select, array) => {
    if (array.length > 0 ){
        array.forEach(elemento => {
            select.innerHTML +=  `<option value="${elemento.factor}">${elemento.tipo}</option>`
        });
    } else {
        console.error ("No existen elementos en el array.")
    }
}

cargarCombo(iphone, datosCelular)
cargarCombo(bateria, datosBateria)



const datosCompletos = () => {
    if (iphone.value != "..." && bateria.value != "..." && detalles.value != "SI"){
        return true 
    }else{
        return false
    }
}


const cotizo = ()  => {
    const valorCotizado = new Cotizador (iphone.value, bateria.value, fijoBat)
           importe.innerText = valorCotizado.cotizar()
           btnEnviar.classList.remove("ocultar")
}

const realizarCotizacion = () => datosCompletos() ? cotizo() : alert("😓 No tomamos equipos con detalles estéticos. De todas maneras asegurate de haber completado los datos correctamente")




const enviarPorEmail = ()=> {
    const cotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        propiedad: propiedad[propiedad.selectedIndex].text,
        ubicacion: ubicacion[ubicacion.selectedIndex].text,
        metrosCuadrados: metros2.value,
        poliza: importe.innerText
    }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
    alert("✅ Cotización enviada. ¡Muchas gracias por elegirnos!")
    btnEnviar.classList.add("ocultar")
}

btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail)