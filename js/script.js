gsap.registerPlugin(ScrollTrigger)
const lenis = new Lenis()
lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add((time) => { lenis.raf(time * 1000) })
gsap.ticker.lagSmoothing(0)




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






function scrollFunction(section) {
    document.querySelector(`.${section}`).scrollIntoView({
        behavior: "smooth" 
    });
}

document.querySelectorAll(".header-buttons").forEach(button => {
    button.onclick = function() {
        scrollFunction(this.dataset.section)
    }
})







let currentOpenCategory = null

function showCategoryItems(category) {
    const currentCategoryDiv = document.querySelector(`#${category}`)
    
    if (!currentCategoryDiv) {
        console.error(`Category with ID '${category}' not found.`)
        return 
    }

    if (currentOpenCategory === category) {
        currentCategoryDiv.style.maxHeight = null
        currentOpenCategory = null
    } else {
        document.querySelectorAll(".drink-items").forEach(div => {
            div.style.maxHeight = null
        })

        currentCategoryDiv.style.maxHeight = `${currentCategoryDiv.scrollHeight}px`
        currentOpenCategory = category
    }
}

document.querySelectorAll(".category-btn").forEach(button => {
    button.onclick = function () {
        showCategoryItems(this.dataset.subcategory)
    }
})



window.onload = () => {
    document.querySelector(`button[data-page="uzkodas"]`).classList.add("active-menu-btn")
    document.querySelector("#uzkodas").style.display = "flex"


    document.querySelector(`button[data-page="dzirkstosieViniUnSampaniesi"]`).classList.add("active-drink-btn")
    document.querySelector("#dzirkstosieViniUnSampaniesi").style.display = "flex"


    activateLangLinks()
}


function activateLangLinks() {
    if (document.documentElement.lang === "lv") {
        document.querySelectorAll(".latBtn").forEach(latLink => {
            latLink.classList.add("active-lang")
            latLink.classList.remove("disabled-lang")
        })
        document.querySelectorAll(".engBtn").forEach(engLink => {
            engLink.classList.remove("active-lang")
            engLink.classList.add("disabled-lang")
        })
    }
    else {
        document.querySelectorAll(".latBtn").forEach(latLink => {
            latLink.classList.remove("active-lang")
            latLink.classList.add("disabled-lang")
        })
        document.querySelectorAll(".engBtn").forEach(engLink => {
            engLink.classList.add("active-lang")
            engLink.classList.remove("disabled-lang")
        })
    }
}



document.querySelector("#curtainBtn").onclick = () => {
    gsap.to(".about", {
        height: "120vh",
        duration: 3,
        ease: "power3.out",
    })
    gsap.to("#curtainBtn", {
        opacity: "0%",
        duration: 2,
    })
}




const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
let isMenuOpen = false;

// GSAP animation for the menu sliding
const menuTimeline = gsap.timeline({ paused: true });
menuTimeline.to(mobileMenu, {
    right: "0%", // Slide in from the right
    duration: 0.5,
    ease: "power3.out",
});

// GSAP animation for the burger icon
const burgerTimeline = gsap.timeline({ paused: true });
burgerTimeline
    .to("#menuBtn span:nth-child(1)", { // Top line
        rotation: 45,
        y: 11.5,
        duration: 0.3,
        ease: "power3.out",
    })
    .to("#menuBtn span:nth-child(2)", { // Middle line
        opacity: 0,
        duration: 0.3,
        ease: "power3.out",
    }, "<")
    .to("#menuBtn span:nth-child(3)", { // Bottom line
        rotation: -45,
        y: -11.5,
        duration: 0.3,
        ease: "power3.out",
    }, "<");

// Toggle menu on burger click
menuBtn.onclick = () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        menuTimeline.play(); // Open the menu
        burgerTimeline.play(); // Animate the burger
    } else {
        menuTimeline.reverse(); // Close the menu
        burgerTimeline.reverse(); // Reset the burger animation
    }
    activateLangLinks()
};

// Close menu on window resize
window.addEventListener("resize", () => {
    if (isMenuOpen) {
        menuTimeline.reverse(); // Close the menu
        burgerTimeline.reverse(); // Reset burger animation
        isMenuOpen = false;
    }
});

// Close menu on user scroll
window.addEventListener("scroll", () => {
    if (isMenuOpen) {
        menuTimeline.reverse(); // Close the menu
        burgerTimeline.reverse(); // Reset the burger animation
        isMenuOpen = false;
    }
});
