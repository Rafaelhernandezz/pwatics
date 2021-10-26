const container = document.querySelector(".container");
const coffees = [{
        name: "Perspiciatis",
        Image: "images/goku1.png"
    },
    {
        name: "Voluptatem",
        Image: "images/goku2.png"
    },
    {
        name: "Explicabo",
        Image: "images/goku3.jfif"
    },
    {
        name: "Rchitecto",
        Image: "images/goku4.png"
    },
    {
        name: "Beatae",
        Image: "images/goku5.jpg"
    },
    {
        name: "Vitae",
        Image: "images/goku6.jfif"
    },
    {
        name: "Inventore",
        Image: "images/goku7.png"
    },
    {
        name: "Veritatis",
        Image: "images/goku8.jpg"
    },
    {
        name: "Accusantium",
        Image: "images/goku9.jpg"
    }
];
const showCoffees = () => {
    let output = "";
    coffees.forEach(
        ({ name, Image }) =>
        (output += `
                        <div class="card">
                            <img class="card--avatar" src=${Image} />
                            <h1 class="card--title">${name}</h1>
                            <a class="card--link" href="#">Taste</a>
                            </div>
                            `)
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registrado"))
            .catch(err => console.log("service worker no registrado", err));
    });
}