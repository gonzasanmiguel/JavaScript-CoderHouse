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

const realizarCotizacion = () => datosCompletos() ? cotizo() : Swal.fire({
    icon: 'error',
    title: 'Cuidado...',
    text: 'No tomamos equipos con detalles esteticos!',
    footer: 'De todas formas asegurate de haber completado todos los datos.'
})




const enviarPorEmail = ()=> {
    const cotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        iphone: iphone[iphone.selectedIndex].text,
        bateria: bateria[bateria.selectedIndex].text,
        cotizacion: importe.innerText
    }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Valuación enviada, gracias por confiar en nosotros',
        timer: 3000
      })
    btnEnviar.classList.add("ocultar")
}

btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail)