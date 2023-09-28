let navTemplate = `
<div class="nav_logo">
    <a href="index.html">
        <img src="img/icons/logo2.png" alt="site_logo">
    </a>
</div>
<ul id="desk_nav_list">
    <a id="destinations_dropdown" href="index.html"><li>Destinos</li></a>
    <ul id="destinations_dropdown_content">
        <a href="argentina.html"><li>Argentina</li></a>
        <a href="brasil.html"><li>Brasil</li></a>
        <a href="uruguay.html"><li>Uruguay</li></a>
    </ul>
    <a href="contact.html">
        <li>Contacto</li>
    </a>
    <a href="flights.html">
        <li>Vuelos</li>
    </a>
</ul>
<div class="nav_search_bar">
    <input type="text" name="search" placeholder="buscar...">
    <img src="img/icons/search_icon.svg" alt="search_img">
</div>
<div id="hb_menu" class="nav_hb_menu_dropdown" tabindex="3">
    <img src="img/icons/hamburger_menu.png" alt="hamburger_menu">
    <ul id="nav_list">
        <a href="cordoba.html">
            <li>Argentina</li>
        </a>
        <a href="brasil.html">
            <li>Brasil</li>
        </a>
        <a href="uruguay.html">
            <li>Uruguay</li>
        </a>
        <a href="flights.html">
            <li>Vuelos</li>
        </a>
    </ul>
</div>
`

document.querySelector("nav").innerHTML = navTemplate;

let footerTemplate = `
<div class="social_links">
    <a href="facebook" target="_blank"><img src="img/icons/facebook.png" alt="facebook"> Facebook</a>
    <a href="twitter" target="_blank"><img src="img/icons/gorjeo.png" alt="twitter"> Twitter</a>
    <a href="instagram" target="_blank"><img src="img/icons/instagram.png" alt="instagram"> Instagram</a>
</div>
<div class="contact">
    <a href="contact.html">Contacto</a>
</div>
<div class="source_links">
    <!-- source link to logo -->
    <!-- <a href="https://www.flaticon.es/iconos-gratis/turismo" title="turismo iconos">Turismo iconos creados por Good Ware - Flaticon</a> -->
    <a href="https://www.flaticon.es/iconos-gratis/boleto" title="boleto iconos">Boleto iconos creados por Eucalyp - Flaticon</a>
    <a href="https://www.flaticon.es/iconos-gratis/facebook" title="facebook iconos">Facebook iconos creados por Freepik - Flaticon</a>
    <a href="https://www.flaticon.es/iconos-gratis/gorjeo" title="gorjeo iconos">Gorjeo iconos creados por Roundicons - Flaticon</a>
    <a href="https://www.flaticon.es/iconos-gratis/instagram" title="instagram iconos">Instagram iconos creados por Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/hamburger" title="hamburger icons">Hamburger icons created by feen - Flaticon</a>
</div>
`

document.querySelector("footer").innerHTML = footerTemplate;