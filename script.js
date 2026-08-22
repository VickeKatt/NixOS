function updateTime() {
    var datetime = new Date().toLocaleString().replace(",", "");
    document.getElementById("datetime").textContent = datetime;
}

updateTime();
setInterval(updateTime, 1000);

function dragElement(element) {
    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;

    var header = element.querySelector(".windowheader");

    header.onmousedown = StartDragging;

    function StartDragging(e) {
        e = e || window.event;
        e.preventDefault();

        initialX = e.clientX;
        initialY = e.clientY;

        document.onmouseup = StopDragging;
        document.onmousemove = DragElement;
    }

    function DragElement(e) {
        e = e || window.event;
        e.preventDefault();

        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;

        initialX = e.clientX;
        initialY = e.clientY;

        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    function StopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

var welcomeScreen = document.querySelector("#welcomewindow");
var terminalScreen = document.querySelector("#terminalwindow");

var welcomeScreenClose = document.querySelector("#welcomeclose");
var terminalScreenClose = document.querySelector("#terminalclose");

dragElement(welcomeScreen);
dragElement(terminalScreen);

function closeWindow(element) {
    element.style.display = "none";
}

function openWindow(element) {
    element.style.display = "block";
}

welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
});

terminalScreenClose.addEventListener("click", function() {
    closeWindow(terminalScreen);
});

document.querySelector("#welcomeopen").addEventListener("dblclick", function() {
    openWindow(welcomeScreen);
});

document.querySelector("#terminal").addEventListener("dblclick", function() {
    openWindow(terminalScreen);
});

var selectedIcon = undefined;

function selectIcon(element) {
    if (selectedIcon !== undefined) {
        selectedIcon.classList.remove("app-selected");
    }

    element.classList.add("app-selected");
    selectedIcon = element;
}

function deselectIcon(element) {
    element.classList.remove("app-selected");
    selectedIcon = undefined;
}

function handleIconTap(element) {
    if (element.classList.contains("app-selected")) {
        deselectIcon(element);
    } else {
        selectIcon(element);
    }
}