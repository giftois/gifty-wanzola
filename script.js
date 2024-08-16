// ! Global Selectors 
const body = document.querySelector('body');
const main = document.getElementById("mainSection");

// ! Header Variables 
const homeNav = document.getElementById('homeNav');
const aboutNav = document.getElementById('aboutNav');
const projectsNav = document.getElementById('projectsNav');
const contactButton = document.getElementById('contactButton');
const gIconHolder = document.getElementById('g-icon-holder');

// ! Light x Dark Mode Variables
const dark = document.getElementById("dark")
const light = document.getElementById("light")

// ! Hero Section Variables
// Image Section Variables
const imgContainer = document.getElementById("imgContainer");

// Hero Text Section Variables
const header = document.getElementById("nameBarBox");
const heroTop = document.getElementById("nameBarBoxDupe");
const heroBox = document.getElementById("heroBox");
const heroArrow = document.getElementById("heroArrow");
const heroPageDividerBottom = document.getElementById("heroPageDividerBottom");
const heroPageDivider = document.getElementById("heroPageDivider");


//! About Me Section Variable Declarations
const aboutToCenter = document.getElementById("aboutToCenter");
const aboutMeOuterBox = document.getElementById("aboutMeOuterBox");
const aboutMeBox = document.getElementById("aboutMeBox");
const aboutMe = document.getElementById("aboutMe");
const aboutMeContent = document.getElementById("aboutMeContent");
const aboutArrowBox = document.getElementById("aboutArrowBox");
const aboutPageDividerBottom = document.getElementById("aboutPageDividerBottom");
const aboutPageDivider = document.getElementById("aboutPageDivider");

//  Tech Stack Section Variable Declarations
const techStack = document.getElementById("techStack");
const techStackBox = document.getElementById("techStackBox");
const codingLanguages = document.getElementsByClassName("codingLanguages");
const pythonIcon = document.getElementById("pythonIcon");
const jsIcon = document.getElementById("jsIcon");
// ! Projects Section Variable Declarations 
const projectsBox = document.getElementById("projectsBox");
const projectsToCenter = document.getElementsByClassName("projectsToCenter");

//  ! Footer Section Variable Declarations
const footerBox = document.getElementById("footerBox");
const footerToCenter = document.getElementById("footerToCenter");

// ! Event handling Functions

// Dark Mode Toggle
const darkMode = () => {
    dark.style.display = "none";
    light.style.display = "block";

    body.style.cssText = `    
    background-color: var(--darkModeDark);
    color: var(--primaryLighter);
    `
    main.style.cssText = `
    box-shadow: 0 0 2px white;
    `
    header.style.cssText = `
    background-color: rgba(23,22,18,0.9);
    box-shadow: 0 0 2px white;
    `
    techStackBox.style.cssText = `
    box-shadow: 0 0 5px black;
    background-color: hsl(45,17%,8%);
    `
    pythonIcon.style.cssText = `
    color: gold;
    `
    jsIcon.style.cssText = `
    color: gold;
    `

    footerBox.style.cssText = `
    background-color: hsl(45,17%,5%);
    `
    footerToCenter.style.cssText = `
    background-color: hsl(45,17%,5%);
    box-shadow: 0 0 1px white;
    `;

}
// Light Mode Toggle

const lightMode = () => {
    dark.style.display = "block";
    light.style.display = "none";

    body.style.cssText = `    
    background-color: var(--primaryLighter);
    color: var(--darkModeDark);
    `
    main.style.cssText = `
    box-shadow: 0 0 2px black;
    `
    header.style.cssText = `
    background-color: var(--primaryLighter);
    box-shadow: 0 0 2px black;
    `
    techStackBox.style.cssText = `
    box-shadow: 0 0 5px var(--darkModeDark);
    background-color: var(--primaryLighter);
    `
    pythonIcon.style.cssText = `
    color: black;
    `
    jsIcon.style.cssText = `
    color: black;
    `
    footerBox.style.cssText = `
    background-color: hsl(45,17%,5%);
    `
    footerToCenter.style.cssText = `
    background-color: hsl(45,17%,5%);
    box-shadow: 0 0 1px black;
    `;

}
// Scroll to About
const toAbout = () => {

    aboutToCenter.style.cssText = `
    display: flex;
    `;

    aboutArrowBox.style.cssText = `
    display: block;
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
    display: flex;
    `;
    heroPageDividerBottom.style.cssText = `
    display: flex;
    `;
    techStack.style.cssText = `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    `;
    footerBox.style.cssText = `
    display: none;
    `
    heroPageDividerBottom.scrollIntoView({ behavior: 'smooth' });
}
// Scroll to Projects
const toProjects = () => {
    
    projectsBox.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    `;

    aboutPageDivider.style.cssText = `
    display: flex;
    `;
    aboutPageDividerBottom.style.cssText = `
    display: flex;
    `;
    footerBox.style.cssText = `
    display: flex;
    `
    projectsBox.scrollIntoView({ behavior: 'smooth' });

}
// Scroll to Home
const toHome = () => {
    heroTop.scrollIntoView({ behavior: 'smooth' });
}

// ! Event Listeners
// Scroll to Home
homeNav.addEventListener("click", toHome);
gIconHolder.addEventListener("click", toHome);

// Scroll to About
aboutNav.addEventListener("click", toAbout);
heroArrow.addEventListener("click", toAbout);

// Scroll to Projects
aboutArrowBox.addEventListener("click", toProjects);
projectsNav.addEventListener("click", toProjects);

// Scroll to Contact
contactButton.addEventListener("click", toProjects);

// Dark/Light 
dark.addEventListener("click", darkMode);
light.addEventListener("click", lightMode);