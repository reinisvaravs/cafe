console.log("Soļankas sastāvdaļas!")

function showPage(page) {
    document.querySelectorAll(".menu-page").forEach(div => {
        div.style.display = "none"
    })

    document.querySelector(`#${page}`).style.display = "flex"

    document.querySelectorAll(".menu_button").forEach(button => {
        button.classList.remove("active-menu-btn")
    })

    document.querySelectorAll(`button[data-page="${page}"]`).forEach(button => {
        button.classList.add("active-menu-btn")
    })

    // reseto galas sekcjas izvelni = displejo liellopgalu
    if (page === "pamatedieni") {
        document.querySelectorAll(".pamat-page").forEach(div => { div.style.display = "none" })
        document.querySelector("#piedevas").style.display = "flex"
        document.querySelectorAll(".pamatediena_button").forEach(button => { button.classList.remove("active-pamat-btn") })
        document.querySelectorAll(`button[data-page="piedevas"]`).forEach(button => { button.classList.add("active-pamat-btn") })
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

    document.querySelectorAll(".menu_button").forEach(button => {
        button.classList.add("underline")
    })

    document.querySelectorAll(".pamatediena_button").forEach(button => {
        button.classList.add("underline")
    })
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