// ! Header Variables 
const homeNav = document.getElementById('homeNav');
const aboutNav = document.getElementById('aboutNav');
const projectsNav = document.getElementById('projectsNav');
const contactButton = document.getElementById('contactButton');
// ! Light x Dark Mode Variables
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
// ! Hero Section Variables
const heroTop = document.getElementById("nameBarBoxDupe");
const heroBox = document.getElementById("heroBox");
const heroArrow = document.getElementById("heroArrow");
const heroPageDivider = document.getElementById("heroPageDivider");

//! About Me Section Variable Declarations
const aboutToCenter = document.getElementById("aboutToCenter");
const aboutMeBox = document.getElementById("aboutMeBox");
const aboutMe = document.getElementById("aboutMe");    
const aboutArrowBox = document.getElementById("aboutArrowBox");
const techStack = document.getElementById("techStack");
const codingLanguages = document.getElementsByClassName("codingLanguages");
const aboutPageDivider = document.getElementById("aboutPageDivider");

// ! Projects Section Variable Declarations 
const projectsBox = document.getElementById("projectsBox");
const projects = document.getElementsByClassName("projectsToCenter");


const toAbout = () => {

    aboutToCenter.style.cssText = `
    display: flex;
    `;

    aboutArrowBox.style.cssText = `
    display
    `;
    aboutMeBox.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    `;
    aboutMe.style.cssText = `
    display: block;
    `;
    heroPageDivider.style.cssText = `
    display: block;
    `;
    techStack.style.cssText = `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    `;
    footerBox.style.cssText = `
    display: none;
    `
    aboutMeBox.scrollIntoView({ behavior: 'smooth' });
}
const toProjects = () => {
    
    projectsBox.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    `;

    aboutPageDivider.style.cssText = `
    display: block;
    `;
    footerBox.style.cssText = `
    display: flex;
    `
    projectsBox.scrollIntoView({ behavior: 'smooth' });

}
const toHome = () => {
    heroTop.scrollIntoView({ behavior: 'smooth' });
}
const footerBox = document.getElementById("footerBox");

// ! Event Listeners
homeNav.addEventListener("click", toHome);
aboutNav.addEventListener("click", toAbout);
heroArrow.addEventListener("click", toAbout);

aboutArrowBox.addEventListener("click", toProjects);
projectsNav.addEventListener("click", toProjects);
contactButton.addEventListener("click", toProjects);


