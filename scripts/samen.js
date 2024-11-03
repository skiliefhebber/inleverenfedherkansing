const openMenu = document.querySelector (".button1");
const sluitMenu = document.querySelector (".button2");

openMenu.onclick = openenButton;
sluitMenu.onclick = sluitenButton;

function openenButton() {
    let deNav = document.querySelector (".navigatie2");
    deNav.classList.add("toonMenu");
}

function sluitenButton(){
    let deNav = document.querySelector (".navigatie2");
    deNav.classList.remove("toonMenu");
}
