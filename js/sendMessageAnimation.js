
const sendMessageBtn = document.getElementById('sendMessage');
const sideBarDiv = document.getElementsByClassName('sideBar')[0];
const form = document.getElementsByTagName('form')[0];
sendMessageBtn.addEventListener('click', (ev) => sendAnimation(ev))

function sendAnimation(ev) {
    form.style.display = 'none'
    ev.preventDefault()
    console.log('ok')
}