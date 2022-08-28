const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const clearBtn = document.getElementById('clear');
const colorPicker = document.getElementById('color');
const sizeEl = document.getElementById('size');

const ctx = canvas.getContext('2d');

let radius = 10;
let color = '#000000';
let isPressed = false;
let x;
let y;

// Mouse down event handler
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

// Mouse up event handler
canvas.addEventListener('mouseup', () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

// Mouse move event handler
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        let x2 = e.offsetX;
        let y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
} );

// Function to draw a circle
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// Function to draw a line
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = radius * 2;
    ctx.stroke();
}

// Update the radius of the circle
function updateSize() {
    sizeEl.innerText = radius;
}

//Increase radius event handler
increaseBtn.addEventListener('click', () => {
    radius += 5;
    if (radius > 50) {
        radius = 50;
    }
    updateSize();
});


// Decrease radius event handler
decreaseBtn.addEventListener('click', () => {
    radius -= 5;
    if (radius < 5) {
        radius = 5;
    }
    updateSize();
});


// Change the color of the brush
colorPicker.addEventListener('change', (e) => {
    color = e.target.value;
});

// Clear the canvas event handler
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
} );

