const colorSwitcherButton = document.getElementById("color-switcher");
const bodyElement = document.body;

function switchColorScheme() {
    let currentClass = bodyElement.className;
    let newClass;
    if (currentClass === "yellow-theme") {
        newClass = "blue-theme";
    } else if (currentClass === "blue-theme") {
        newClass = "red-theme";
    } else {
        newClass = "yellow-theme";
    }
    bodyElement.className = newClass;
}

colorSwitcherButton.addEventListener("click", switchColorScheme);
