class Cotizador {
    constructor (factorModelo, factorCondicion, fijoBat){
        this.factorMod = parseFloat(factorModelo)
        this.factorCond = parseFloat(factorCondicion)
        this.fijoBat = parseFloat(fijoBat)
    }
    cotizar(){
        let resultado = (this.factorMod * this.factorCond * this.fijoBat)
        return resultado.toFixed(0)
    }
}

