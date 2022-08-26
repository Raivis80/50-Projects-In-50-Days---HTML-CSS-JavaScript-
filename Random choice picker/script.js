const tagsEl = document.querySelector('.tags');
const textArea = document.querySelector('#text-area');

textArea.focus()

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    console.log(e.keyCode);
    if (e.keyCode === 13) {
        setTimeout(() => {
            textArea.value = '';
        }, 10);

        randomSelect()
    }
} );


// Enter all of the choices divided by comma (',').
function createTags(text) {
    const tags = text.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerHTML = tag;
        tagsEl.appendChild(tagEl);
    } );
}

function randomSelect() {
    const times = 30;

    const inter = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        } , 100);
    }, 100);

    setTimeout(() => {
        clearInterval(inter);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        } , 100);
        
    } , times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}