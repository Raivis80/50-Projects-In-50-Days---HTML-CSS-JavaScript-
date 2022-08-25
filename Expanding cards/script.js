const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', function(e) {
        removeActive();
        this.classList.add('active');
    });
}
);

function removeActive() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    }
    );
}