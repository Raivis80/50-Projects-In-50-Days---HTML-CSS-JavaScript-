const btn = document.getElementById('btn');
const toastContainer = document.getElementById('toasts');

const messages = [
    'You are awesome',
    'You are great',
    'You are amazing',
    'You are the best',
];

const toastType = ['success', 'info', 'warning', 'error'];



btn.addEventListener('click', () => createNotification());

function createNotification(type = null, message = null) {

    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(type ? type : getRandomType());
    toast.innerHTML = message ? message : getRandomMessage();
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
    return toastType[Math.floor(Math.random() * toastType.length)];
}