const smallCaps = document.querySelectorAll('.cup-small');
const liters = document.querySelector('#liters');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');

updateBigCup();

smallCaps.forEach((smallCap, idx) => {
    smallCap.addEventListener('click', () => highlightCup(idx));
} );

function highlightCup(idx) {
    if (smallCaps[idx].classList.contains('full') && !smallCaps[idx].nextElementSibling.classList.contains('empty')) {
        idx--;
    }
    smallCaps.forEach((cap, idx2) => {
        if (idx2 <= idx) {
            cap.classList.add('full');
        } else {
            cap.classList.remove('full');
        }
    }
    );
    updateBigCup();
}


function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCaps.length;

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = '0px';
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;

        percentage.innerHTML = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.height = '0px';
        remained.style.visibility = 'hidden';
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }

}
