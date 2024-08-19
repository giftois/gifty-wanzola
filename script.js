// ! Global Variables
let isExpanded = false;

//  Variable to track the current mode and alter hovrr effects
let isDarkMode = true;

// ! Global Selectors 
const body = document.getElementById('body');
const main = document.getElementById("mainSection");

// ! Header Variables 
const homeNav = document.getElementById('homeNav');
const aboutNav = document.getElementById('aboutNav');
const projectsNav = document.getElementById('projectsNav');
const contactButton = document.getElementById('contactButton');
const headerNavs = document.getElementsByClassName("headerNavs");
const gIcon = document.getElementById('g-icon');
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
const projectCard = document.getElementsByClassName("projectCard");

const diceHeaderBox = document.getElementById("diceHeaderBox");
const snakeHeaderBox = document.getElementById("snakeHeaderBox");

const snakeBox = document.getElementById("snakeBox");
const diceBox = document.getElementById("diceBox");

const snakeIcon = document.getElementById("snakeIcon");
const diceIcon = document.getElementById("diceIcon");

const snakeHeader = document.getElementById("snakeHeader");
const diceHeader = document.getElementById("diceHeader");


//  ! Footer Section Variable Declarations
const footerBox = document.getElementById("footerBox");
const footerToCenter = document.getElementById("footerToCenter");
const footerSeparator = document.getElementById("footerSeparator");
const docBottom = document.getElementById("docBottom");
const socialIcons = document.getElementsByClassName("social-icons");
const instagram = document.getElementById("instagram");
const linkedin = document.getElementById("linkedin");
const discord = document.getElementById("discord");
const github = document.getElementById("github");


// ! Event handling Functions
const headerOnHover = (event) => {
    const headerColor = isDarkMode ? 'white' : 'black';
    event.target.style.cssText = `
    color: ${headerColor};
    border-left: solid 1px ${headerColor};
    border-right: solid 1px ${headerColor};
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

const iconOnHover = (event) => {
    const iconColor = isDarkMode ? 'goldenrod' : 'maroon';
    event.target.style.cssText = `
    color: ${iconColor};
    `;
}

const iconOnLeave = (event) => {
    const iconColor = isDarkMode ? 'var(--primary)' : 'var(--darkModeDark)';
    event.target.style.cssText = `
    color: ${iconColor};
    `;
}

// Apply hover effect to each socialIcon element
Array.from(socialIcons).forEach(icon => {
    icon.addEventListener("mouseenter", iconOnHover);
    icon.addEventListener("mouseleave", iconOnLeave);
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
    box-shadow: 0 0 2px white;
    `;
    techStackHeader.style.cssText = `
    color: black;
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
    snakeBox.style.cssText = `
    box-shadow: 0 0 2px white;
    background-color: hsl(45,17%,5%);
    `;
    snakeIcon.style.cssText = `
    color: goldenrod;
    `
    snakeHeader.style.cssText = `
    background-color: rgba(23,22,18,0.9);
    color: white;
    box-shadow: 0 0 1px white;
    `;
    diceBox.style.cssText = `
    box-shadow: 0 0 2px white;
    background-color: hsl(45,17%,5%);
    `;
    diceIcon.style.cssText = `
    color: goldenrod;
    `;
    diceHeader.style.cssText = `
    background-color: rgba(23,22,18,0.9);
    box-shadow: 0 0 1px white;
    color: white;
    `;

    footerToCenter.style.cssText = `
    background-color: hsl(45, 17%, 5%);
    box-shadow: 0 0 2px white;
    `
    footerSeparator.style.cssText = `
    background-color: hsl(45, 17%, 5%);
    box-shadow: 0 0 2px white;
    `
    discord.style.color = "var(--primaryLighter)";
    github.style.color = "var(--primaryLighter)";
    instagram.style.color = "var(--primaryLighter)";
    linkedin.style.color = "var(--primaryLighter)";


    // Reapply hover effect after dark mode toggle
    Array.from(headerNavs).forEach(nav => {
        nav.addEventListener("mouseenter", headerOnHover);
        nav.addEventListener("mouseleave", headerOnLeave);
    });

    Array.from(socialIcons).forEach(icon => {
        icon.addEventListener("mouseenter", iconOnHover);
        icon.addEventListener("mouseleave", iconOnLeave);
    });
}

// Light Mode Toggle
const lightMode = () => {
    isDarkMode = false;
    dark.style.display = "block";
    light.style.display = "none";

    body.style.cssText = `
    background-color: '';
    color: '';
    `;
    main.style.cssText = `
    box-shadow: '';
    background-color: var(--primaryLighter);
    `;
    header.style.cssText = `
    background-color: '';
    box-shadow: '';
    `;
    lightGlow.style.display = 'none';

    highlightText.style.cssText = `
    color: '';
    `;
    aboutMeHeader.style.cssText = `
    color: '';
    `;
    techStackBox.style.cssText = `
    box-shadow: '';
    background-color: '';
    `;
    pythonIcon.style.cssText = `
    color: '';
    `;
    jsIcon.style.cssText = `
    color: '';
    `;
    snakeBox.style.cssText = `
    box-shadow: '';
    background-color: '';
    `;
    snakeIcon.style.cssText = `
    color: '';
    `;
    snakeHeader.style.cssText = `
    background-color: '';
    box-shadow: '';
    color: '';
    `;
    diceBox.style.cssText = `
    box-shadow: '';
    background-color: '';
    `;
    diceIcon.style.cssText = `
    color: '';
    `;
    diceHeader.style.cssText = `
    background-color: '';
    box-shadow: '';
    color: '';
    `;
    footerToCenter.style.cssText = `
    background-color: '';
    box-shadow: ''; 
    `
    footerSeparator.style.cssText = `
    background-color: (var--primaryLighter);
    box-shadow: '';
    `
    discord.style.color = "var(--darkModeDark)";
    github.style.color = "var(--darkModeDark)";
    instagram.style.color = "var(--darkModeDark)";
    linkedin.style.color = "var(--darkModeDark)";

    // Reapply hover effects after light mode toggle
    Array.from(headerNavs).forEach(nav => {
        nav.addEventListener("mouseenter", headerOnHover);
        nav.addEventListener("mouseleave", headerOnLeave);
    });

    Array.from(socialIcons).forEach(icon => {
        icon.addEventListener("mouseenter", iconOnHover);
        icon.addEventListener("mouseleave", iconOnLeave);
    });
}

// Scroll to Home
const toHome = () => {
    footerToCenter.classList.remove('expanded');
    heroTop.scrollIntoView({ behavior: 'smooth' });
}

// Scroll to About
const toAbout = () => {
    footerToCenter.classList.remove('expanded');
    aboutToCenter.style.cssText = `
    display: flex;
    `;
    aboutToCenter.scrollIntoView({ behavior: 'smooth' });
}

// Scroll to Projects
const toProjects = () => {

    toAbout();

    footerToCenter.classList.remove('expanded');
    projectsToCenter.style.cssText = `
    display: flex;
    `;

    footerSeparator.style.display = "flex";

    projectsToCenter.scrollIntoView({ behavior: 'smooth' });

    window.addEventListener('scroll', checkFooterPosition);
}

// Scroll to Contact
const toContact = () => {

    aboutToCenter.style.cssText = `
    display: flex;
    `;    

    projectsToCenter.style.cssText = `
    display: flex;
    `;
    footerSeparator.style.display = "flex";
    footerToCenter.classList.add('expanded');
    docBottom.scrollIntoView({ behavior: 'smooth' });

}

// Footer sizing functionality
const checkFooterPosition = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // Check if the user is near the bottom of the page (within 5px)
    if (scrollTop + clientHeight >= scrollHeight - 1) {
        if (!isExpanded) {
            footerToCenter.classList.add('expanded');
            footerSeparator.style.cssText = `position: absolute;`;
            footerSeparator.classList.add('expanded');
            isExpanded = true;
        }
    } else if (isExpanded) {
        // If not at the bottom, shrink the footer back
        footerToCenter.classList.remove('expanded');
        footerSeparator.style.cssText = `position: absolute;`;
        footerSeparator.classList.remove('expanded');
        isExpanded = false;
    }
};


// ! Event Listeners
// Scroll to Home
homeNav.addEventListener("click", toHome);
gIcon.addEventListener("click", toHome);

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

// Initialize with dark mode
isDarkMode ? darkMode() : lightMode();

// TODO Got lazy insert chatCPT function here
document.addEventListener('DOMContentLoaded', function () {
    const diceIcon = document.getElementById('diceIcon');
    const diceClasses = [
        'fa-dice-one',
        'fa-dice-two',
        'fa-dice-three',
        'fa-dice-four',
        'fa-dice-five',
        'fa-dice-six'
    ];

    const getRandomDiceClass = () => {
        const randomIndex = Math.floor(Math.random() * diceClasses.length);
        return diceClasses[randomIndex];
    }

    const changeDiceIcon = () => {

        diceClasses.forEach(diceClass => diceIcon.classList.remove(diceClass));

        const randomDiceClass = getRandomDiceClass();

        diceIcon.classList.add(randomDiceClass);
    }

    // Change icon every time the shake animation ends
    diceIcon.addEventListener('animationiteration', changeDiceIcon);
});


