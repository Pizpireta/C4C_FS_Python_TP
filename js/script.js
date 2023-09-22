window.addEventListener('DOMContentLoaded', () => {
    const HBMENU = document.getElementById("hb_menu");
    const CONTAINER = document.getElementById("nav_list");
    let lastVPosition = window.scrollY;
    let mobile = window.matchMedia("(max-width: 425px)")

    HBMENU.onblur = hideHBDropdownContent();

    HBMENU.onclick = function displayHBMenu() {
        if (CONTAINER.clientWidth > 0) {
            hideHBDropdownContent();
        } else {
            CONTAINER.style.maxWidth = "50vw";
            CONTAINER.style.maxHeight = "20rem";
            CONTAINER.style.backgroundColor = "var(--hbmenu-active-color)";
            HBMENU.style.backgroundColor = "var(--hbmenu-active-color)";
        }
    }

    window.onscroll = function adjustNavBar() {
        const NAVBAR = document.querySelector("nav");

        if (mobile.matches) {
            if (window.scrollY > lastVPosition) {
                NAVBAR.style.top = "-100px";
            } else {
                NAVBAR.style.top = "0px";
            }
            hideHBDropdownContent();
    
            lastVPosition = window.scrollY;
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

