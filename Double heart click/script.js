const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clicks = 0;
let timesClicked = 0;

loveMe.addEventListener('click', function(e) {
    if (clicks === 0) {
        clicks = new Date().getTime();
    } else {
        if ((new Date().getTime(e) - clicks) < 8000) {
            createHeart(e);
            clicks = 0;
        } else {
            clicks = new Date().getTime();
        }
    }
});

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart');
    
    const x = e.clientX;
    const y = e.clientY;

    const offsetLeft = e.target.offsetLeft;
    const offsetTop = e.target.offsetTop;

    const xInside = x - offsetLeft;
    const yInside = y - offsetTop;

    heart.style.left = xInside + 'px';
    heart.style.top = yInside + 'px';

    loveMe.appendChild(heart);
    times.innerHTML = ++timesClicked;

    setTimeout(() => {
        loveMe.removeChild(heart);
    }
    , 1000);
}
