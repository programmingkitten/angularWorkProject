import {textData} from "./textData.js"
const aboutBoxDiv = document.getElementsByClassName('aboutBox')[0];
const infoText = aboutBoxDiv.children[aboutBoxDiv.children.length-1];
const timeOuts = [];
console.log(infoText)

for (let i=0; i< aboutBoxDiv.children.length-1; i++) {
    aboutBoxDiv.children[i].addEventListener('click', showOption)
}

function showOption(ev) {
    let el = ev.target;
    clearHover();
    infoText.textContent = '';
    animateTextChange(infoText, textData[el.textContent], 50)
    el.style.color = 'indianred';
}

function clearHover() {
    for (let i=0; i<aboutBoxDiv.children.length-1; i++) {
        aboutBoxDiv.children[i].style.color = 'rgb(57, 56, 56)'
    }
}

function animateTextChange(el, text, timeBetweenEachLetter) {
    let delay = timeBetweenEachLetter;
    let bonusDelay = timeBetweenEachLetter;
    clearTimeouts();
    for (let letter of text) {
        let timeout = setTimeout(() => {
            el.textContent += letter;
        }, delay)
        delay += bonusDelay;

        timeOuts.push(timeout)
    }
}

function clearTimeouts() {
    for (let timeout of timeOuts) {
        clearTimeout(timeout);
    };
};