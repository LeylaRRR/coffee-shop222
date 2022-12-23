let container = document.body;

function openMenuItem(event) {
    let darkWindow = document.createElement("div");
    container.appendChild(darkWindow);
    darkWindow.setAttribute("class","new-window");
    darkWindow.setAttribute("onclick","removeWindow()");


    let picWindow = document.createElement("div");
    darkWindow.appendChild(picWindow);
    picWindow.setAttribute("class","menu-item")

    let itemPicWindow = document.createElement("div");
    picWindow.appendChild(itemPicWindow);
    itemPicWindow.setAttribute("class","menu-item-pic");
    
    let itemTextWindow = document.createElement("div");
    picWindow.appendChild(itemTextWindow);
    itemTextWindow.setAttribute("class","menu-item-text");

    

    let classN = event.target.className.split(" ")[1];
    let x = document.querySelector("."+classN);
    let y = window.getComputedStyle(x);
    let z = y.getPropertyValue('background-image');
    itemPicWindow.style.backgroundImage = z;
}
function removeWindow() {
    document.querySelector(".new-window").remove();
}


