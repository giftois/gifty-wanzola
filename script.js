// ! Global Selectors 
const body = document.querySelector('body');
const main = document.getElementById("mainSection");

// ! Header Variables 
const homeNav = document.getElementById('homeNav');
const aboutNav = document.getElementById('aboutNav');
const projectsNav = document.getElementById('projectsNav');
const contactButton = document.getElementById('contactButton');
const headerNavs = document.getElementsByClassName("headerNavs")
const gIconHolder = document.getElementById('g-icon-holder');
const lightGlow = document.getElementById('lightGlow');

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
const highlightText = document.getElementById("highlightText");
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
const techStackHeaderBox = document.getElementById("techStackHeaderBox");
const techStackBox = document.getElementById("techStackBox");
const techStackHeader = document.getElementById("techStackHeader");
const codingLanguages = document.getElementsByClassName("codingLanguages");
const pythonIcon = document.getElementById("pythonIcon");
const jsIcon = document.getElementById("jsIcon");
// ! Projects Section Variable Declarations 
const projectsBox = document.getElementById("projectsBox");
const projectsToCenter = document.getElementById("projectsToCenter");

//  ! Footer Section Variable Declarations
const footerBox = document.getElementById("footerBox");
const footerToCenter = document.getElementById("footerToCenter");

// ! Event handling Functions
const headerOnHover = () => {
    headerNavs.style.cssText = `
    color: var(--primaryLighter);
    border-left: solid 1px var(--primaryLighter);
    border-right: solid 1px var(--primaryLighter);
    `
}
// Dark Mode Toggle
const darkMode = () => {

    dark.style.display = "none";
    light.style.display = "block";

    // Body to Style inner margin background
    body.style.cssText = `    
    background-color:  hsl(45,17%,9%);
    color: white;
    `
    // Main to Style outer margin background
    main.style.cssText = `
    box-shadow: 0 0 2px white;
    background-color: var(--darkModeDark);
    `
    header.style.cssText = `
    background-color: rgba(23,22,18,0.9);
    box-shadow: 0 0 2px white;
    `
    lightGlow.style.display = 'block';

    highlightText.style.cssText = `
    color: goldenrod;

    `;
    techStackHeaderBox.style.cssText = `
    background-color: var(--darkModeDark);
    box-shadow: 0 0 2px white;
    `
    techStackHeader.style.cssText = `
    color: white;
    `

    techStackBox.style.cssText = `
    box-shadow: 0 0 2px white;
    background-color: hsl(45,17%,5%);
    `
    pythonIcon.style.cssText = `
    color: gold;
    `
    jsIcon.style.cssText = `
    color: gold;
    `

    headerNavs.addEventListener("mouseenter", headerOnHover)

}
// Light Mode Toggle
const lightMode = () => {
    dark.style.display = "block";
    light.style.display = "none";

    // Main to Style outer margin background
    body.style.cssText = `
    background-color: hsl(36, 43%, 81%);
    
    color: var(--darkModeDark);
    `
    // Main to Style outer margin background
    main.style.cssText = `
    box-shadow: 0 0 2px black;
    background-color: var(--primaryLighter);
    `
    header.style.cssText = `
    background-color: var(--backgroundTP);
    box-shadow: 0 0 2px black;
    `
    lightGlow.style.display = 'none';
    highlightText.style.cssText = `
    color: maroon;
    `;
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
}
// Scroll to Home
const toHome = () => {
    heroTop.scrollIntoView({ behavior: 'smooth' });
}
// Scroll to About
const toAbout = () => {

    aboutToCenter.style.cssText = `
    display: flex;
    `;

    techStack.style.cssText = `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    `;

    heroPageDividerBottom.scrollIntoView({ behavior: 'smooth' });
}

// Scroll to Projects
const toProjects = () => {

    projectsToCenter.style.cssText = `
    display: flex;
    `;

    projectsToCenter.scrollIntoView({ behavior: 'smooth' });

    footerToCenter.style.cssText = `
    height: 55vh;
    position: static;
    `;
}
const toContact = () => {

    footerBox.scrollIntoView({ behavior: 'smooth' });

    footerToCenter.style.cssText = `
    height: 55vh;
    position: static;
    `;

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
contactButton.addEventListener("click", toContact);

// Dark/Light 
dark.addEventListener("click", darkMode);
light.addEventListener("click", lightMode);

darkMode();