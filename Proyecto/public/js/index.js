document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);

});


//Parallax
  document.addEventListener("DOMContentLoaded", function() {

    var elemsParallax = document.querySelectorAll(".parallax");
    var instancesParallax = M.Parallax.init(elemsParallax);

    var elemsSideNav = document.querySelectorAll(".sidenav");
    var instancesSideNav = M.Sidenav.init(elemsSideNav);

});

