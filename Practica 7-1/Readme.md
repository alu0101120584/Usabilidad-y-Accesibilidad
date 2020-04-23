
# Informe Intro Firebase

## Grupo 15
* Juan Eduardo Reyes Pérez
* Nelson Noda Pérez 

## Puntos a tratar: 
1. Base de datos al inicio
![Texto alternativo](https://github.com/eduardoreyes99/Usabilidad-y-Accesibilidad/blob/master/Practica%207-1/img/Inicio.png)
2. Inserción de una nueva entrada en la base de datos
Mediante el siguiente código realizaremos la inserción de un nuevo usuario en nuestra base de datos.
```
var referencia = database.ref('usuarios/usuario3');

        referencia.set({
            nombre: "Alberto",
            apellidos: "González",
        });
```
![Texto alternativo](https://github.com/eduardoreyes99/Usabilidad-y-Accesibilidad/blob/master/Practica%207-1/img/Actualizar.png)

3. Actualización de datos de una entrada.
Mediante el uso de .update podemos actualizar los datos de una entrada ya existente en nuestra base de datos.
```
var referencia = database.ref('usuarios/usuario3');

        referencia.update({
            // Actualizando entrada
            apellido: "Hernández",
        })
```
![Texto alternativo](https://github.com/eduardoreyes99/Usabilidad-y-Accesibilidad/blob/master/Practica%207-1/img/Update.png)
4. Consulta de datos por consola
![Texto alternativo]()
