window.addEventListener('DOMContentLoaded', () => {
    const HBMENU = document.getElementById("hb_menu");
    const CONTAINER = document.getElementById("nav_list");
    const ASIDEEXP = document.querySelector(".aside_expand");
    const ASIDE = document.querySelector("aside");
    const NAVBAR = document.querySelector("nav");
    const SIDEMAPS = document.getElementById("sidemaps");
    const SIDEMAPSEXP = document.getElementById("sidemaps_expand");

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
        let icon = ASIDEEXP.querySelector("i");
        if (parseInt(ASIDE.style.left) >= 0) {
            ASIDE.style.left = "-80vw";
            ASIDEEXP.style.left = "0px";
            icon.style.transform = "scaleX(1)";
        } else {
            NAVBAR.style.top = "0px";
            ASIDE.style.left = "0px";
            ASIDEEXP.style.left = "80vw";
            icon.style.transform = "scaleX(-1)";
        }
    };

    SIDEMAPSEXP.onclick = function displaySideMaps() {
        if (parseInt(SIDEMAPS.style.right) >= 0) {
            SIDEMAPS.style.right = "-40vw";
        } else {
            SIDEMAPS.style.right = "0px";
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

    // #region Fooling around
    const scContainers = document.getElementsByClassName("showcase_container");
    let containerCount = scContainers.length;
    let slicesTop = [];
    let slicesBottom = [];
    let offsetTop = 0;
    let offsetBottom = 0;

    for (let i = 1; i <= containerCount; i++) {
        offsetTop = (100 / containerCount * i) + 5;
        offsetBottom = (100 / containerCount * i) - 5;
        slicesTop.push(offsetTop);
        slicesBottom.push(offsetBottom);
    }
    
    for (let i = 1; i <= containerCount; i++) {
        const container = scContainers[i - 1];
        if (i == 1) {
            container.style.clipPath = `polygon(0 0, ${slicesTop[i - 1]}% 0, ${slicesBottom[i - 1]}% 100%, 0 100%)`;
        } else if (i == containerCount) {
            container.style.clipPath = `polygon(${slicesTop[i - 2]}% 0, 100% 0, 100% 100%, ${slicesBottom[i - 2]}% 100%)`;
        } else {
            container.style.clipPath = `polygon(${slicesTop[i - 2]}% 0, ${slicesTop[i - 1]}% 0, ${slicesBottom[i - 1]}% 100%, ${slicesBottom[i - 2]}% 100%)`;
        }
    }
    // #endregion

    /*
    top left: 0 0
    top right: 100 0
    bottom right: 100 100
    bottom left: 0 100

    first:
    top right: (100 / count) 0
    */
});

