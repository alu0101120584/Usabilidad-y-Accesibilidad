var yen = new moneda()
 yen.nombre = "Yenes"
 yen.tipodeCambio= 99.5 //valor de cambio

 var euro = new moneda()
 euro.nombre = "euro"
 euro.tipodeCambio= 0.92 //valor de cambio

 var libra = new moneda()
 libra.nombre = "libra"
 libra.tipodeCambio= 0.81 //valor de cambio

function moneda(){
    this.nombre
    this.tipodeCambio

    this.convertir= function(monto){
        conversionResultado= monto * this.tipodeCambio
        document.getElementById('resultadoDelCambio').innerHTML = conversionResultado
    }
}

function convertirMoneda(tipodeMoneda){
    var montoSeleccionado = document.getElementById('monto').value

    if(tipodeMoneda == "yen") {
     yen.convertir(montoSeleccionado)
    }
    else if(tipodeMoneda == "euro"){
        euro.convertir(montoSeleccionado)
    }
    else  libra.convertir(montoSeleccionado)
 }