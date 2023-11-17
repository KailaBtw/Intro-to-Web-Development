



function toggleMenuBar() {
    if(document.querySelector("#site-navigation").className == "main-navigation") {
        document.querySelector("#site-navigation").className = "main-navigation toggled"
    } else {
        document.querySelector("#site-navigation").className = "main-navigation"
    }
}