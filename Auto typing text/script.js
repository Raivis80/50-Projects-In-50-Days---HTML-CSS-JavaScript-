const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Hello World ! This is a text to type !';
let index = 0;
let speed = 300 / speedEl.value;


writeText();

function writeText() {
    let letter = text.slice(0, index);
    textEl.innerText = letter;
    index++;

    if (index > text.length) {
        index = 0;
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
});