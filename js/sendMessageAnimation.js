
const sendMessageBtn = document.getElementById('sendMessage');
const sideBarDiv = document.getElementsByClassName('sideBar')[0];
const form = document.getElementsByTagName('form')[0];
const loadingBar = document.getElementsByClassName('loadingBarContent')[0];
const bar = document.getElementsByClassName('bar')[0];
const percentageText = document.getElementById('percentages');
const statusText = document.getElementById('status');
sendMessageBtn.addEventListener('click', (ev) => sendAnimation(ev))
const messages = [
    'Extracting form data...',
    'Connecting to servers...',
    'Sending email to pylaCoorp@gmai.com ...',
    'Email sent succesfully!',
]

function sendAnimation(ev) {
    form.style.display = 'none'
    ev.preventDefault()
    loadingBar.style.display = 'block';
    let percents = 1;
    bar.style.width = `1%`
    let timeOut = 50;
    let timeOutBouns = timeOut;
    for (let c=0; c<=100; c++) {
        console.log("?")
        timeOut += timeOutBouns;
        setTimeout(() => 
        {
            let s = `${c}%`;
            bar.style.width = s;
            percentageText.textContent = s;
            console.log('?');
        }, timeOut);
        
    }
    let messageTimeOut = 50;
    let messageTimeOutBonus = 1700;
    for (let message of messages) {
        setTimeout(() => 
        {
            statusText.textContent = message;
        }, messageTimeOut);
        messageTimeOut += messageTimeOutBonus;
    }
    console.log('ok')
}