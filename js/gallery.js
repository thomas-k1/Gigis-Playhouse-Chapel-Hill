function clickImage(element) {
    var popup = document.getElementById("popup");
    popup.setAttribute("style", "visibility:visible");
    //popup.classList.toggle("show");
}

function clickPopup() {
    var popup = document.getElementById("popup");
    popup.setAttribute("style", "visibility:hidden");
}