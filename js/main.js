let mood = document.querySelector(".switch");
let span = document.querySelector(".switch span");
const html = document.documentElement;
html.dataset.theme = `theme-light`;
// themse toggler
function toggleTheme() {
    mood.classList.toggle("slide");
    if (mood.classList.contains("light")) {
        mood.classList.remove("light");
        mood.classList.add("dark");
        html.dataset.theme = "theme-dark";
    } else {
        mood.classList.remove("dark");
        mood.classList.add("light");
        html.dataset.theme = "theme-light";
    }
    span.classList.toggle("active");
}

// mood.onclick = () => {
//     console.log(span);
// };

mood.addEventListener("click", toggleTheme);