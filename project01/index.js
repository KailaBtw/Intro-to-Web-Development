



function toggleMenuBar() {
    if(document.querySelector("#site-navigation").className = "main-navigation") {
        document.querySelector("#site-navigation").className = "main-navigation toggled"
        document.querySelector(".menu-toggle").setAttribute(aria-expanded) = "true"
    }else {
        document.querySelector("#site-navigation").className = "main-navigation"
        document.querySelector(".menu-toggle").setAttribute("aria-expanded", false) //= "false"
    }
}