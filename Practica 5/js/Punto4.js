const hoy = new Date();

const A = {
    dni: "43840922R",
    nacimiento: new Date(1987, 09, 21),
    Ingreso: new Date(2007, 03, 20),
    Productividad: 0.2,
    sueldo: 1500,
    Pbruto: function () {
        let tiempo = (hoy.getFullYear() - this.Ingreso.getFullYear())/3;
        tiempo = tiempo * 0.1;
        return tiempo;
    },
}

const B = {
    dni: "47204356G",
    nacimiento: new Date(1967, 10, 23),
    Ingreso: new Date(2005, 07, 10),
    Productividad: 0.1,
    sueldo: 2500,
    Pbruto: function () {
        let tiempo = (hoy.getFullYear() - this.Ingreso.getFullYear())/3;
        tiempo = tiempo * 0.1;
        return tiempo;
    },
}

function calcular(usuario) {
    let nac = usuario.nacimiento.getFullYear();
    let edad = hoy.getFullYear() - nac;
    let sueldo = usuario.sueldo;
    let auxa = sueldo * usuario.Productividad;
    let auxb = sueldo * usuario.Pbruto();
    sueldo = sueldo + auxa + auxb;

    const resultado = [edad, sueldo];
    return resultado;
}

function random_item(items) {

    return items[Math.floor(Math.random() * items.length)];

}

const usuarios = [A, B];
const texto = document.querySelector(".sueldo");
const boton_edad = document.querySelector(".boton-edad");

boton_edad.onclick = () => {

    const p = document.createElement("p");
    const usuario_aleatorio = random_item(usuarios);
    const mostrar = calcular(usuario_aleatorio);

    p.textContent = `DNI: ${usuario_aleatorio.dni}, EDAD: ${mostrar[0]}, SUELDO FINAL: ${mostrar[1]}.`;

    texto.replaceChild(p, texto.childNodes[2]);
}