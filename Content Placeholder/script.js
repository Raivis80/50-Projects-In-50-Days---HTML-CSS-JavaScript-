const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profileImg = document.querySelector("#profile-img");
const pName = document.querySelector("#name");
const pDate = document.querySelector("#date");

const animatedbgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="laptop">';
    title.innerHTML = "Lorem ipsum dolor sit amet.";
    excerpt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.";
    profileImg.innerHTML = '<img src="http://randomuser.me/api/portraits/men/45.jpg" alt="">';
    pName.innerHTML = "John Doe";
    pDate.innerHTML = "Oct 24, 2018";

    animatedbgs.forEach(bg => bg.classList.remove('animated-bg'));
    animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-text'));

}
