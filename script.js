// ! Light x Dark Mode Code
const dark = document.getElementById("dark")
const light = document.getElementById("light")

const darkMode = () => {
    dark.style.display = "none";
    light.style.display = "block";
}

const lightMode = () => {
    dark.style.display = "block";
    light.style.display = "none";
}

dark.addEventListener("click", darkMode);
light.addEventListener("click", lightMode);
// ! End of Light x Dark Mode


//! About Me Button Code
const aboutMeBox = document.getElementById("aboutMeBox");
const heroArrow = document.getElementById("heroArrow");

const displayAbout = () => {
    aboutMeBox.style.cssText = `
    display: inline-block;
    `;
}

heroArrow.addEventListener("click", displayAbout);
