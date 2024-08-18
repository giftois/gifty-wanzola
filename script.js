// ! Global Selectors 
const body = document.getElementById('body');
const main = document.getElementById("mainSection");

// ! Header Variables 
const homeNav = document.getElementById('homeNav');
const aboutNav = document.getElementById('aboutNav');
const projectsNav = document.getElementById('projectsNav');
const contactButton = document.getElementById('contactButton');
const headerNavs = document.getElementsByClassName("headerNavs");
const gIconHolder = document.getElementById('g-icon-holder');
const lightGlow = document.getElementById('lightGlow');

// ! Light x Dark Mode Variables
const dark = document.getElementById("dark");
const light = document.getElementById("light");

// ! Hero Section Variables
const header = document.getElementById("nameBarBox");
const heroTop = document.getElementById("nameBarBoxDupe");
const highlightText = document.getElementById("highlightText");
const heroArrow = document.getElementById("heroArrow");
const heroPageDividerBottom = document.getElementById("heroPageDividerBottom");

//! About Me Section Variable Declarations
const aboutToCenter = document.getElementById("aboutToCenter");
const aboutMeHeader = document.getElementById("aboutMeHeader");

//  Tech Stack Section Variable Declarations
const techStackHeaderBox = document.getElementById("techStackHeaderBox");
const techStackBox = document.getElementById("techStackBox");
const techStackHeader = document.getElementById("techStackHeader");
const pythonIcon = document.getElementById("pythonIcon");
const jsIcon = document.getElementById("jsIcon");

// ! Projects Section Variable Declarations 
const projectsToCenter = document.getElementById("projectsToCenter");

//  ! Footer Section Variable Declarations
const footerBox = document.getElementById("footerBox");
const footerToCenter = document.getElementById("footerToCenter");

// ! Event handling Functions
//  Variable to track the current mode and alter hovrr effects
let isDarkMode = true;

const headerOnHover = (event) => {
    const hoverColor = isDarkMode ? 'white' : 'black';
    event.target.style.cssText = `
    color: ${hoverColor};
    border-left: solid 1px ${hoverColor};
    border-right: solid 1px ${hoverColor};
    `;
}

const headerOnLeave = (event) => {
    event.target.style.cssText = `
    color: '';
    border-left: '';
    border-right: '';
    `;
}

// Apply hover effect to each headerNav element
Array.from(headerNavs).forEach(nav => {
    nav.addEventListener("mouseenter", headerOnHover);
    nav.addEventListener("mouseleave", headerOnLeave);
});

// Dark Mode Toggle
const darkMode = () => {
    isDarkMode = true;
    dark.style.display = "none";
    light.style.display = "block";

    body.style.cssText = `    
    background-color:  hsl(45,17%,9%);
    color: white;
    `;
    main.style.cssText = `
    box-shadow: 0 0 2px white;
    background-color: var(--darkModeDark);
    `;
    header.style.cssText = `
    background-color: rgba(23,22,18,0.9);
    box-shadow: 0 0 2px white;
    `;
    lightGlow.style.display = 'block';

    highlightText.style.cssText = `
    color: goldenrod;
    `;
    aboutMeHeader.style.cssText = `
    color: goldenrod;
    `;
    techStackHeaderBox.style.cssText = `
    background-color: var(--darkModeDark);
    box-shadow: 0 0 2px white;
    `;
    techStackHeader.style.cssText = `
    color: white;
    `;
    techStackBox.style.cssText = `
    box-shadow: 0 0 2px white;
    background-color: hsl(45,17%,5%);
    `;
    pythonIcon.style.cssText = `
    color: gold;
    `;
    jsIcon.style.cssText = `
    color: gold;
    `;

    // Reapply hover effect after dark mode toggle
    Array.from(headerNavs).forEach(nav => {
        nav.addEventListener("mouseenter", headerOnHover);
        nav.addEventListener("mouseleave", headerOnLeave);
    });
}

// Light Mode Toggle
const lightMode = () => {
    isDarkMode = false;
    dark.style.display = "block";
    light.style.display = "none";

    body.style.cssText = `
    background-color: hsl(36, 43%, 81%);
    color: var(--darkModeDark);
    `;
    main.style.cssText = `
    box-shadow: 0 0 2px black;
    background-color: var(--primaryLighter);
    `;
    header.style.cssText = `
    background-color: var(--backgroundTP);
    box-shadow: 0 0 2px black;
    `;
    lightGlow.style.display = 'none';
    highlightText.style.cssText = `
    color: maroon;
    `;
    aboutMeHeader.style.cssText = `
    color: var(--background);
    `;
    techStackBox.style.cssText = `
    box-shadow: 0 0 5px var(--darkModeDark);
    background-color: var(--primaryLighter);
    `;
    pythonIcon.style.cssText = `
    color: black;
    `;
    jsIcon.style.cssText = `
    color: black;
    `;

    // Reapply hover effect after light mode toggle
    Array.from(headerNavs).forEach(nav => {
        nav.addEventListener("mouseenter", headerOnHover);
        nav.addEventListener("mouseleave", headerOnLeave);
    });
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

// Scroll to Contact
const toContact = () => {
    footerBox.scrollIntoView({ behavior: 'smooth' });

    footerToCenter.style.cssText = `
    height: 55vh;
    position: static;
    `;
}
// Footer sizing functionality
const checkFooterPosition = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // Check if the user is at the bottom of the page
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        if (!isExpanded) {
            footerToCenter.classList.add('expanded');
            isExpanded = true;
        }
    } else {
        if (isExpanded && scrollTop + clientHeight < scrollHeight - 5) {
            footerToCenter.classList.remove('expanded');
            isExpanded = false;
        }
    }
};
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

// Scroll position checker
window.addEventListener('scroll', checkFooterPosition);


// Initialize with dark mode
darkMode();
