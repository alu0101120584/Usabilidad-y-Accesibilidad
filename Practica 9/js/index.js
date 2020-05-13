document.addEventListener("DOMContentLoaded", function () {
    var elemsCollapsible = document.querySelectorAll(".collapsible");
    var instancesCollapsible = M.Collapsible.init(elemsCollapsible);

    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems);

    const izquierda = document.querySelector("#izda");
    const derecha = document.querySelector("#dcha");
    let actual;
    izquierda.onclick = () => {
        instances[0].prev();
    };

    derecha.onclick = () => {
       
        instances[0].next();
    };
});
