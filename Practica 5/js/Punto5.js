// Crear un script que muestre un informe de la cantidad de párrafos, 
// enlaces y encabezados en tu página de inicio.
let encabezados = document.getElementsByTagName("h1"); 
let parrafos = document.getElementsByTagName("p");
let enlaces = document.getElementsByTagName("a");


function contar() {
    let NumeroEncaebzados = `Número de encabezados (h2): ${encabezados.length}`;

    let Numeroparrafos = `Número de párrafos: ${parrafos.length}`;
    let NumeroEnlaces = `Número de enlaces: ${enlaces.length}`;

 return (NumeroEncaebzados + `\n` + Numeroparrafos + `\n` + NumeroEnlaces);
}

contar();

const imprimir_resultado = document.querySelector(".contarParrafos");
const boton_contar = document.getElementById("contarParrafos");

boton_contar.onclick = () => {
    const p = document.createElement("p");
    p.textContent = contar();
    imprimir_resultado.replaceChild(p, imprimir_resultado.childNodes[2]);
}