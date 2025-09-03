document.addEventListener('DOMContentLoaded', () => {
    const botonD = document.getElementById("oscuro");
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const logo = document.getElementById("logo");
    const inicioImg = document.getElementById("inicio-img");
    const footer = document.querySelector('footer');

    botonD.addEventListener("click", () => {
        if (main.classList.contains("oscuro")) {
            // 🌞 Volvemos a modo claro
            nav.classList.remove("dark");
            main.classList.remove("oscuro");
            nav.classList.add("claro");
            main.classList.add("natural");
            inicioImg.src = "a.png";
            footer.classList.remove("footero");
        } else {
            // 🌙 Activamos modo oscuro
            nav.classList.remove("claro");
            main.classList.remove("natural");
            nav.classList.add("dark");
            main.classList.add("oscuro");
            inicioImg.src = "co2eD.png";
            footer.classList.add("footero");    // esta es la que me dijiste
        }
    });
});
