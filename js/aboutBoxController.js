import {textData} from "./textData.js"
const aboutBoxDiv = document.getElementsByClassName('aboutBox')[0];
const infoText = aboutBoxDiv.children[aboutBoxDiv.children.length-1];
console.log(infoText)

for (let i=0; i< aboutBoxDiv.children.length-1; i++) {
    aboutBoxDiv.children[i].addEventListener('click', showOption)
}

function showOption(ev) {
    let el = ev.target;
    clearHover();
    console.log(el.textContent)
    console.log(textData[el.textContent])
    infoText.textContent = textData[el.textContent];
    el.style.color = 'indianred';
}

function clearHover() {
    for (let i=0; i<aboutBoxDiv.children.length-1; i++) {
        aboutBoxDiv.children[i].style.color = 'rgb(57, 56, 56)'
    }
}