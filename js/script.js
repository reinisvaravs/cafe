

function showPage(page) {
    // Hide all menu pages
    document.querySelectorAll(".menu-page").forEach(div => {
        div.style.display = "none"
    })

    // Show the selected page
    document.querySelector(`#${page}`).style.display = "flex"

    // Remove active class from all buttons
    document.querySelectorAll(".menu_button").forEach(button => {
        button.classList.remove("active-menu-btn")
    })

    // Add active class to the button of the selected page
    document.querySelectorAll(`button[data-page="${page}"]`).forEach(button => {
        button.classList.add("active-menu-btn")
    })

    // Dynamically update the background image
    const menuImg = document.querySelector(".menu-img")
    if (menuImg) {
        menuImg.className = "menu-img" // Reset class
        menuImg.classList.add(`${page}-img`)
    }

    // Reset the default "pamatedieni" submenu behavior
    if (page === "pamatedieni") {
        document.querySelectorAll(".pamat-page").forEach(div => {
            div.style.display = "none"
        })
        document.querySelector("#piedevas").style.display = "flex"
        document.querySelectorAll(".pamatediena_button").forEach(button => {
            button.classList.remove("active-pamat-btn")
        })
        document.querySelectorAll(`button[data-page="piedevas"]`).forEach(button => {
            button.classList.add("active-pamat-btn")
        })
    }
}



document.querySelectorAll(".menu_button").forEach(button => {
    button.onclick = function() {
        showPage(this.dataset.page)
    }
})


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
        })
    }
})

document.querySelectorAll(".gotop").forEach(button => {
    button.onclick = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        })
    }
})





let currentOpenCategory = null;

function showCategoryItems(category) {
    const currentCategoryDiv = document.querySelector(`#${category}`);
    
    if (!currentCategoryDiv) {
        console.error(`Category with ID '${category}' not found.`);
        return; 
    }

    if (currentOpenCategory === category) {
        currentCategoryDiv.style.maxHeight = null;
        currentOpenCategory = null;
    } else {
        document.querySelectorAll(".drink-items").forEach(div => {
            div.style.maxHeight = null;
        });

        currentCategoryDiv.style.maxHeight = `${currentCategoryDiv.scrollHeight}px`;
        currentOpenCategory = category;
    }
}

document.querySelectorAll(".category-btn").forEach(button => {
    button.onclick = function () {
        showCategoryItems(this.dataset.subcategory);
    };
});



window.onload = () => {
    document.querySelector(`button[data-page="uzkodas"]`).classList.add("active-menu-btn")
    document.querySelector("#uzkodas").style.display = "flex"


    document.querySelector(`button[data-page="dzirkstosieViniUnSampaniesi"]`).classList.add("active-drink-btn")
    document.querySelector("#dzirkstosieViniUnSampaniesi").style.display = "flex"
}


document.addEventListener("keydown", (event) => {
    if (event.key === "F" || event.key === "f") { // Check for 'F' or 'f'
        document.querySelectorAll(".keyF").forEach(h2 => {
            h2.style.fontFamily = "'General Sans', sans-serif"
        })
    }
});




let toggle = false; 
console.log("key F toggles font")

document.addEventListener("keydown", (event) => {
    if (event.key === "F" || event.key === "f") {
        if (toggle) {
            document.querySelectorAll(".keyF").forEach(h2 => {
                h2.style.fontFamily = "'General Sans', sans-serif"
            })
        } else {
            document.querySelectorAll(".keyF").forEach(h2 => {
                h2.style.fontFamily = "'Boska', serif"
            })
        }
        toggle = !toggle;
    }
});
