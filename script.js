document.addEventListener('DOMContentLoaded', () => {
    /*Aca va todo el codigo script para que se cargue bien el DOM */
    const botonD = document.getElementById("oscuro");
    const nav = document.querySelector('nav');
    const body = document.querySelector('body');

    botonD.addEventListener("click", () => {
        nav.classList.remove("claro");
        body.classList.remove("natural");
        nav.classList.add("dark");
        body.classList.add("oscuro");
    })

});