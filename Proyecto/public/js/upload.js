const cosas= document.querySelector('#cosas')
var correo;
var config = {
  apiKey: "AIzaSyBO5DxjowBwL5wNfQNo38jyNUR2KjaYbz0",
  authDomain: "proyecto-uya.firebaseapp.com",
  databaseURL: "https://proyecto-uya.firebaseio.com",
  projectId: "proyecto-uya",
  storageBucket: "proyecto-uya.appspot.com",
  messagingSenderId: "860429330925",
  appId: "1:860429330925:web:d22e63febac1a8fef1dfe4",
  measurementId: "G-R63QXXGT52"
};
firebase.initializeApp(config);
var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('user logeado')
    
    cosas.innerHTML = `<a tabindex="0" class="btn-floating btn-large waves-effect waves-light blue" onclick="crearnuevosdatos()" href="#saltar"><i class="material-icons">add</i></a>`
    var displayName = user.displayName;
    correo = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
	
	
  } else {
    console.log('user no logeado')
    cosas.innerHTML = `<a tabindex="0" class="btn-floating btn-large waves-effect waves-light blue" onclick="alert('Debe iniciar sesión para subir una oferta')"><i class="material-icons">add</i></a>`
    
  }
});

// Add a new document in collection "cities"
//let Asignatura = document.getElementById("Asignatura").value;
function crearnuevosdatos() {
  db.collection("cities").doc().set({
      Asignatura: document.getElementById("Asignatura").value,
      Tiempo: document.getElementById("Numero").value,
      Oferta: document.getElementById("Opciones").value,
      contacto: correo
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
}  

//Leer datos
let email = localStorage.getItem("email");
var tabla = document.getElementById('tabla');
db.collection("cities").onSnapshot((querySnapshot) => {
  tabla.innerHTML = '';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().Asignatura}`);
      tabla.innerHTML +=`
      <tr>
        <td tabindex="0">${doc.data().Asignatura}</td>
        <td tabindex="0">${doc.data().Oferta}</td>
        <td tabindex="0">${doc.data().Tiempo}</td>
        <td tabindex="0"  >${doc.data().contacto}</td>

        <td><a class="btn btn-success" href="mailto:'${doc.data().contacto}'?Subject=Interesado%20en%20su%20oferta%20del%20banco%20de%20tiempo" onclick="eliminar('${doc.id}')">Seleccionar</a></td>
      </tr>
	  `
      //Aqui hacer un if para comprobar si el usuario logeado es el mismo que creo la tarea para poder editarlo o elimnarlo
  });
});

//Borrar datos
function eliminar(id) {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
		  console.log('user logeado')
		  db.collection("cities").doc(id).delete().then(function() {
			console.log("Documento borrado correctamente");
		  }).catch(function(error) {
			console.error("Error borrando el documento: ", error);
		  });
		  
		} else {
      alert("Debe estar registrado o logeado para poder seleccionar una oferta");
		  console.log('user no logeado')
		  
		}
	  });

  
}

