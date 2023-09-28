window.addEventListener('DOMContentLoaded', () => {
    const HBMENU = document.getElementById("hb_menu");
    const CONTAINER = document.getElementById("nav_list");
    const ASIDEEXP = document.querySelector(".aside_expand");
    const ASIDE = document.querySelector("aside");
    const NAVBAR = document.querySelector("nav");

    let lastVPosition = window.scrollY;
    let mobile = window.matchMedia("(max-width: 425px)")

    if (mobile.matches) ASIDE.style.left = "-80vw";

    HBMENU.onblur = hideHBDropdownContent;

    window.onscroll = function adjustNavBar() {
        if(parseInt(ASIDE.style.left) < 0) {
            if (mobile.matches) {
                if (window.scrollY > lastVPosition) {
                    NAVBAR.style.top = "-100px";
                } else {
                    NAVBAR.style.top = "0px";
                }
                lastVPosition = window.scrollY;
            }
        }
        hideHBDropdownContent();
    };

    HBMENU.onclick = function displayHBMenu() {
        if (parseInt(CONTAINER.style.maxWidth) > 0) {
            hideHBDropdownContent();
        } else {
            CONTAINER.style.maxWidth = "50vw";
            CONTAINER.style.maxHeight = "20rem";
            CONTAINER.style.backgroundColor = "var(--bg-highlight-color)";
            HBMENU.style.backgroundColor = "var(--bg-highlight-color)";
        }
    };

    ASIDEEXP.onclick = function displayAside() {
        if (parseInt(ASIDE.style.left) >= 0) {
            ASIDE.style.left = "-80vw";
            ASIDEEXP.style.left = "0px";
        } else {
            NAVBAR.style.top = "0px";
            ASIDE.style.left = "0px";
            ASIDEEXP.style.left = "80vw";
        }
    };

    function hideHBDropdownContent() {
        CONTAINER.style.maxWidth = "0px";
        CONTAINER.style.maxHeight = "0px";
        CONTAINER.style.backgroundColor = "var(--bg-dark-color)";
        HBMENU.style.backgroundColor = "var(--bg-dark-color)";
    }

    // function showScrollBar() {
    //     const MAIN = document.querySelector("main");
    //     const SCROLLBAR = MAIN.querySelector("scrollbar");
    // }
});

