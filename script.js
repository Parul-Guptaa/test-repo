const menubtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menubtnicon = menubtn.querySelector("i");

if (menubtn) {
    console.log("Menu button found");
    menubtn.addEventListener("click", (e) => {
        console.log("Menu button clicked");
        navlinks.classList.toggle("open");

        const isopen = navlinks.classList.contains("open");
        menubtnicon.setAttribute("class", isopen ? "ri-close-line" : "ri-menu-line");
    });
} else {
    console.log("Menu button not found");
}

if (navlinks) {
    console.log("Nav links found");
} else {
    console.log("Nav links not found");
}

if (menubtnicon) {
    console.log("Menu button icon found");
} else {
    console.log("Menu button icon not found");
}

const scrollRevealoption ={
    distance: "50px",
    origin: "bottom",
    duration : 1000,
};

ScrollReveal().reveal(".header_image img",(
    ...scrollRevealoption,
    origin: "right",
));
ScrollReveal().reveal(".header_image img",(
    ...scrollRevealoption,
    delay: "500",
));
ScrollReveal().reveal(".header_image img",(
    ...scrollRevealoption,
    origin: "right",
));