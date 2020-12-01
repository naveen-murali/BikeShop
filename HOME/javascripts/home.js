
const nav = document.querySelector("nav");
const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");
const msg = document.querySelector("#msg");
const navHead = document.querySelector('nav h3 > a > span');


/* -------------------------------slider------------------------------- */
//todo: slider data.
const sliderData = [
    "Handmade bicycle",
    "Speed cycle",
    "Mouintain bicycle"
];

//todo: slider data position.
let slider_index = 0;
//todo: slider initalising slider_add function.
slider_add();

function slider_add() {
    let data = ``;
    if (slider_index >= sliderData.length) {
        slider_index = 0;
    }

    data = `<span>${sliderData[slider_index]}</span>`;

    slider_index++;
    slider.innerHTML = data;
    setTimeout(slider_fade, 100);
}
function slider_fade() {
    let slider_span = document.querySelector(".slider span")
    slider_span.classList.add("fade");
    setTimeout(slider_add, 3000);
}
/* -------------------------------slider------------------------------- */


//todo: to shrink the navbar on scroll.
window.addEventListener("scroll", (e) => {
    if (window.scrollY > 80) {
        nav.classList.add("shrink");
        navHead.classList.add('shrink');
    } else {
        nav.classList.remove("shrink");
        navHead.classList.remove('shrink');
    }
});


//todo: hover category.
cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.classList.add("hover")
    })
    card.addEventListener("mouseleave", () => {
        card.classList.remove("hover")
    })
})


//todo: textarea on blur and focus.
msg.addEventListener("focus", (e) => {
    msg.style.color = 'rgba(26, 26, 26, 0.87)';
    msg.textContent = ''
});
msg.addEventListener("blur", () => {
    if (msg.value == '') {
        msg.textContent = 'MESSAGE';
        msg.style.color = 'rgba(94, 93, 93, 0.767)';
    }
});


