function toggleClass() {
    let menu = document.querySelector(".mainMenu");
    menu.classList.toggle("togglecls");

    let ham = document.querySelector(".hamIcon");
    ham.classList.toggle("checked");
}

function togglePopup1() {
    document.getElementById("popup-1").classList.toggle("active");

    let disable = document.querySelector(".footer-content");
    disable.classList.toggle("disable");
}

function togglePopup2() {
    document.getElementById("popup-2").classList.toggle("active");

    let disable = document.querySelector(".footer-content");
    disable.classList.toggle("disable");
}

function togglePopup3() {
    document.getElementById("popup-3").classList.toggle("active");

    let disable = document.querySelector(".footer-content");
    disable.classList.toggle("disable");
}

function togglePopup4() {
    document.getElementById("popup-4").classList.toggle("active");

    let disable = document.querySelector(".footer-content");
    disable.classList.toggle("disable");
}
