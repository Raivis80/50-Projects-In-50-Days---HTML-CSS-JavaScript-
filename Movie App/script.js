const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';


const form = document.querySelector("#form");
const search = document.querySelector("#search");
const main  = document.querySelector("#main");

getMovies(API_URL);

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    
    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = "";

    movies.forEach(movie => {
        const { title, overview, poster_path, vote_average } = movie;

        const card = document.createElement("div");
        card.classList.add("movie");

        card.innerHTML = `
                
                    <img src="${IMG_PATH + poster_path}" alt="${title}">
                    <div class="movie-info">
                        <h3>${title}</h3>
                        <span class="${getClassByRate(
                          vote_average
                        )}">${vote_average}</span>
                    </div>
                    <div class="overview">
                        <h3>Label</h3>
                        <p>${overview}</p>
                    </div>
 `;

        main.appendChild(card);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value;

    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm);

        search.value = "";
    } else {
        window.location.reload();
    }
});