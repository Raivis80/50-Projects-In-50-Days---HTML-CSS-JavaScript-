const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");


const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Toggle the dark/light mode
toggle.addEventListener("click", (e) => {
    const html = document.querySelector("html");

    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        e.target.innerHTML = "Dark Mode";
    } else {
        html.classList.add("dark");
        e.target.innerHTML = "Light Mode";
    }
});

// Get the current time and set the clock
function setTime() {
    const time = new Date();
    const month = months[time.getMonth()];
    const day = days[time.getDay()];
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Map the hours to the clock
    const hoursDegrees = scale(hoursForClock, 0, 11, 0, 360);
    const minutesDegrees = scale(minutes, 0, 59, 0, 360);
    const secondsDegrees = scale(seconds, 0, 59, 0, 360);

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursDegrees}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutesDegrees}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secondsDegrees}deg)`;

    timeEl.innerHTML = `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
    dateEl.innerHTML = `${day}, ${month} <span class="circle">${date}</span>`;
}

// Map a range of numbers to another range of numbers
// Copied from https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();

// Update the time every second
setInterval(setTime, 1000);

