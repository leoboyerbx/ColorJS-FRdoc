document.addEventListener("keyup", function (ev) {
    allpoints[currentslide].classList.remove('select');
    
    if (ev.keyCode == 37 || ev.keyCode == 38) {
        prevslide();
    }
    else if (ev.keyCode == 39 || ev.keyCode == 40 || ev.keyCode == 32 || ev.keyCode == 13) {
        nextslide();
    }
    else if (ev.keyCode == 36) {
        var current = currentslide;
        for(var i=0; i < current; i++) {
            prevslide();
        }
    }
    else if (ev.keyCode == 27 || ev.keyCode == 72) {
        hideInterface();
    }
    else if (ev.keyCode == 115) {
        globalView();
    }
    else if (ev.keyCode == 35) {
        var current = allslides.length - currentslide;
        for(var i=0; i < current; i++) {
            nextslide();
        }
    }
    
    allpoints[currentslide].classList.add('select');
});