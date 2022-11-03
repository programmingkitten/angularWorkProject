import {textData} from "./textData.js"
const aboutBoxDiv = document.getElementsByClassName('aboutBox')[0];


for (let i=0; i< aboutBoxDiv.children.length-1; i++) {
    aboutBoxDiv.children[i].addEventListener('click', showOption)
}

function showOption(ev) {
    let el = ev.target;
    clearHover();
    el.style.color = 'indianred';
}

function clearHover() {
    for (let i=0; i<aboutBoxDiv.children.length-1; i++) {
        aboutBoxDiv.children[i].style.color = 'rgb(57, 56, 56)'
    }
}