const faqToggle = document.querySelectorAll('.faq-toggle');

faqToggle.forEach(toggle => {
    toggle.addEventListener('click', function() {
        this.parentElement.classList.toggle('active');
    } );
    }
);