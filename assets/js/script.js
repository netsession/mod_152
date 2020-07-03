    function zoomit(zoom) {
        var display = document.getElementById("chosen");
        display.innerHTML = zoom;
        var pic = document.getElementById("pic");
        pic.style.width = zoom + "%";
        pic.style.height = zoom + "%";
    }