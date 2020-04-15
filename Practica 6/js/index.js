$("#boton-usuarios").on("click", obtenerUsuarios);

function obtenerUsuarios() {
  id = document.querySelector("#id").value;
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/comments?postId=1",
    data: `id=${id}`,
    success: function(respuesta) {

      var listaUsuarios = $("#lista-usuarios");
      $.each(respuesta, function(index, elemento) {
        listaUsuarios.append(
            '<div>'
          +     '<p>' + elemento.name + ' ' + elemento.email + elemento.body +'</p>'
          + '</div>'
        );    
      });
    },
    error: function() {
      console.log("No se ha podido obtener la información");
    }
  });
}