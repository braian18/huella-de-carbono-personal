document.addEventListener('DOMContentLoaded', () => {
    const botonD = document.getElementById("oscuro");
    const nav = document.querySelector('nav');
    const body = document.querySelector('body');

    botonD.addEventListener("click", () => {
        if(body.classList.contains("oscuro")){
            // Si ya está oscuro, volvemos a claro
            nav.classList.remove("dark");
            body.classList.remove("oscuro");
            nav.classList.add("claro");
            body.classList.add("natural");
        } else {
            // Si está claro, vamos a oscuro
            nav.classList.remove("claro");
            body.classList.remove("natural");
            nav.classList.add("dark");
            body.classList.add("oscuro");
        }
    });
});
