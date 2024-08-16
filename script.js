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
const aboutMe = document.getElementById("aboutMe");
const heroArrow = document.getElementById("heroArrow");
const pageDivider = document.getElementById("pageDivider");
const techStack = document.getElementById("techStack");
const codingLanguages = document.getElementsByClassName("codingLanguages");

const displayAbout = () => {
    aboutMeBox.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    
    `;
    aboutMe.style.cssText = `
    display: block;
    `;
    pageDivider.style.cssText = `
    display: block;
    `;
    techStack.style.cssText = `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    `;

}

heroArrow.addEventListener("click", displayAbout);
