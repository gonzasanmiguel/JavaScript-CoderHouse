// Base de datos y conexion con el DOM JS

const iphone = document.querySelector("#iphone")
const bateria = document.querySelector("#bateria")
const detalles = document.querySelector("#detalles")
const btnCotizar = document.querySelector("button")
const importe = document.querySelector("span")
const btnEnviar = document.querySelector("span.guardar")




const datosCelular = [
                    {tipo: "iPhone 8 64gb", factor: 1.05},
                    {tipo: "iPhone 8 128gb", factor: 1.07},
                    {tipo: "iPhone 11 64gb", factor: 2.10},
                    {tipo: "iPhone 11 128gb", factor: 2.20},
                    {tipo: "iPhone 13 128gb", factor: 4.10},
                    {tipo: "iPhone 13 256gb", factor: 4.14},

]

const datosBateria = [
                    {tipo: "80 - 85", factor: 1.05},
                    {tipo: "85 - 90", factor: 1.10},
                    {tipo: "90 - 95", factor: 1.18},
                    {tipo: "95 - 100", factor: 1.30},

]


const fijoBat = 150