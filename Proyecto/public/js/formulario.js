(function() {

  //Inicializar Firebase
    const config = {
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
  
    // Obtener elementos
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');
  
    // Añadir Evento login
    btnLogin.addEventListener('click', e => {
      //Obtener email y pass
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      // Sign in
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));   
    });
  
    // Añadir evento signup
    btnSignUp.addEventListener('click', e => {
      // Obtener email y pass
      // TODO: comprobar que el email sea real
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      // Sign in
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
    });
  
    btnLogout.addEventListener('click', e => {
      firebase.auth().signOut();
    });
  
    // Añadir un listener en tiempo real
     firebase.auth().onAuthStateChanged( firebaseUser => {
      if(firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
      } else {
        console.log('no logueado');
        btnLogout.classList.add('hide');
      }    
    });
  } ());