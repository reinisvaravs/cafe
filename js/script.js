console.log("Soļankas sastāvdaļas!")


function showPage(page) {
    // Hide all menu pages
    document.querySelectorAll(".menu-page").forEach(div => {
        div.style.display = "none";
    });

    // Show the selected page
    document.querySelector(`#${page}`).style.display = "flex";

    // Remove active class from all buttons
    document.querySelectorAll(".menu_button").forEach(button => {
        button.classList.remove("active-menu-btn");
    });

    // Add active class to the button of the selected page
    document.querySelectorAll(`button[data-page="${page}"]`).forEach(button => {
        button.classList.add("active-menu-btn");
    });

    // Dynamically update the background image
    const menuImg = document.querySelector(".menu-img");
    if (menuImg) {
        menuImg.className = "menu-img"; // Reset class
        menuImg.classList.add(`${page}-img`);
    }

    // Reset the default "pamatedieni" submenu behavior
    if (page === "pamatedieni") {
        document.querySelectorAll(".pamat-page").forEach(div => {
            div.style.display = "none";
        });
        document.querySelector("#piedevas").style.display = "flex";
        document.querySelectorAll(".pamatediena_button").forEach(button => {
            button.classList.remove("active-pamat-btn");
        });
        document.querySelectorAll(`button[data-page="piedevas"]`).forEach(button => {
            button.classList.add("active-pamat-btn");
        });
    }
}



document.querySelectorAll(".menu_button").forEach(button => {
    button.onclick = function() {
        showPage(this.dataset.page)
    }
})

window.onload = () => {
    document.querySelector(`button[data-page="uzkodas"]`).classList.add("active-menu-btn")
    document.querySelector("#uzkodas").style.display = "flex"


    document.querySelector(`button[data-page="vins"]`).classList.add("active-drink-btn")
    document.querySelector("#vins").style.display = "flex"
}

function showGalasPage(page) {
    document.querySelectorAll(".pamat-page").forEach(div => {
        div.style.display = "none"
    })

    document.querySelector(`#${page}`).style.display = "flex"

    document.querySelectorAll(".pamatediena_button").forEach(button => {
        button.classList.remove("active-pamat-btn")
    })

    document.querySelectorAll(`button[data-page="${page}"]`).forEach(button => {
        button.classList.add("active-pamat-btn")
    })
}

document.querySelectorAll(".pamatediena_button").forEach(button => {
    button.onclick = function() {
        showGalasPage(this.dataset.page)
    }
})



function showDrinksPage(page) {
    document.querySelectorAll(".drinks-page").forEach(div => {
        div.style.display = "none"
    })

    document.querySelector(`#${page}`).style.display = "flex"

    document.querySelectorAll(".drink_button").forEach(button => {
        button.classList.remove("active-drink-btn")
    })

    document.querySelectorAll(`button[data-page="${page}"]`).forEach(button => {
        button.classList.add("active-drink-btn")
    })
}

document.querySelectorAll(".drink_button").forEach(button => {
    button.onclick = function() {
        showDrinksPage(this.dataset.page)
    }
})




document.querySelectorAll(".edienkarte-btn").forEach(button => {
    button.onclick = () => {
        const a = document.querySelector(".hero").offsetHeight
        const b = document.querySelector(".about").offsetHeight
        window.scroll({
            top: a+b+150, 
            left: 0, 
            behavior: 'smooth' 
        });
    }
})

document.querySelectorAll(".gotop").forEach(button => {
    button.onclick = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
    }
})