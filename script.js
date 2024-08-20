// ! Global Variables
let isExpanded = false;
let isOpen = false;

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

// Hamburger Variables
const hamburgerBox = document.getElementById('hamburgerBox');
const hamburger = document.getElementById('hamburger');

const burgerHomeNav = document.getElementById('burgerHomeNav');
const burgerAboutNav = document.getElementById('burgerAboutNav');
const burgerProjectsNav = document.getElementById('burgerProjectsNav');
const hamburgerIcon = document.getElementById('hamburgerIcon');

// ! Light x Dark Mode Variables
const dark = document.getElementById("dark");
const light = document.getElementById("light");
// ! Contact Pop up Variables 
const backgroundOverlay = document.getElementById("backgroundOverlay");
const contactPopUpToCenter = document.getElementById("contactPopUpToCenter");
const contactFormBox = document.getElementById("contactFormBox");
const popUpFormTextHighlight = document.getElementById("popUpFormTextHighlight");
const xIcon = document.getElementById("xIcon");
const popUpEmail = document.getElementById("popUpEmail");
const popUpRightBox = document.getElementById("popUpRightBox");

const popUpDiscord = document.getElementById("popUpDiscord");
const popUpGithub = document.getElementById("popUpGithub");
const popUpLinkedin = document.getElementById("popUpLinkedin");
// ! Hero Section Variables
const heroName = document.getElementById("heroName");
const header = document.getElementById("nameBarBox");
const heroTop = document.getElementById("nameBarBoxDupe");
const highlightText = document.getElementById("highlightText");
const heroArrow = document.getElementById("heroArrow");
const heroPageDividerBottom = document.getElementById("heroPageDividerBottom");

//! About Me Section Variable Declarations
const aboutToCenter = document.getElementById("aboutToCenter");
const aboutMeHeader = document.getElementById("aboutMeHeader");
const aboutMeHeaderBox = document.getElementById("aboutMeHeaderBox");


// Soft Skills Section Variable Declarations
const softSkillsHeaderBox = document.getElementById("softSkillsHeaderBox");
const softSkillsBox = document.getElementById("softSkillsBox");
const softSkillsHeader = document.getElementById("softSkillsHeader");

// Tech Stack Section Variable Declarations
const techStackHeaderBox = document.getElementById("techStackHeaderBox");
const techStackBox = document.getElementById("techStackBox");
const techStackHeader = document.getElementById("techStackHeader");
const pythonIcon = document.getElementById("pythonIcon");
const jsIcon = document.getElementById("jsIcon");

// ! Projects Section Variable Declarations 
const projectsHeaderBox = document.getElementById("projectsHeaderBox");
const projectsHeader = document.getElementById("projectsHeader");
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
const linkedin = document.getElementById("linkedin");
const discord = document.getElementById("discord");
const github = document.getElementById("github");
const footerHighlight = document.getElementById("footerHighlight");
const footerText = document.getElementById("footerText");
const copyright = document.getElementById("copyright");

// ! Event handling Functions
const headerOnHover = (event) => {
    const headerColor = isDarkMode ? 'goldenrod' : 'black';
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
    const iconColor = isDarkMode ? 'var(--backgroundTP)' : 'var(--darkModeDark)';
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
    background-color:  hsl(250,17%,5%);
    color: white;
    `;
    main.style.cssText = `
    box-shadow: 0 0 2px white;
    background-color:  hsl(250,17%,5%);
    `;
    
    header.style.cssText = `
    background-color: rgba(20,19,27,0.90);
    box-shadow: 0 0 2px white;
    `;
    hamburgerIcon.style.cssText = `
    color: var(--backgroundTP);
    `
    hamburgerBox.style.cssText = `
    background-color: rgba(20,19,27,0.95);
    box-shadow: 0 0 2px white;
    `
    burgerAboutNav.style.cssText = `
    color: white;
    `
    burgerProjectsNav.style.cssText = `
    color: white;
    `
    burgerHomeNav.style.cssText = `
    color: white;
    `
    lightGlow.style.display = 'block';

    heroName.style.color = "var(--backgroundTP)";
    highlightText.style.cssText = `
    color: goldenrod;
    `;

    contactPopUpToCenter.style.cssText = `
    box-shadow: 0 0 0 white;
    `
    backgroundOverlay.style.cssText = `
    background-color: rgba(0,0,0, 0.5);
    `
    contactFormBox.style.cssText = `
    background-color: rgba(20, 19, 27, 0.8);
    box-shadow: 0 0 1px white;
    `;
    popUpFormTextHighlight.style.color = "goldenrod";

    popUpRightBox.style.cssText = `
    background-color:  hsl(250,17%,15%);
    `
    popUpEmail.style.color = 'goldenrod';

    popUpDiscord.style.color = "var(--primaryLighter)";
    popUpGithub.style.color = "var(--primaryLighter)";
    popUpLinkedin.style.color = "var(--primaryLighter)";

    aboutMeHeader.style.cssText = `
    color: white;
    `;
    aboutMeHeaderBox.style.cssText = `
    background-color: rgba(20,19,27,0.95);
    box-shadow: 0 0 1px white;    
    `;
    
    softSkillsHeaderBox.style.cssText = `
    background-color: var(--backgroundTP);
    box-shadow: 0 0 2px white;
    `;
    softSkillsHeader.style.cssText = `
    color: black;
    `;
    softSkillsBox.style.cssText = `
    box-shadow: 0 0 2px white;
    background-color: rgba(20,19,27,0.95);
    `;
    techStackHeaderBox.style.cssText = `
    background-color: var(--backgroundTP);
    box-shadow: 0 0 2px white;
    `;
    techStackHeader.style.cssText = `
    color: black;
    `;
    techStackBox.style.cssText = `
    box-shadow: 0 0 2px white;
    background-color: rgba(20,19,27,0.95);
    `;
    pythonIcon.style.cssText = `
    color: gold;
    `;
    jsIcon.style.cssText = `
    color: gold;
    `;
    projectsHeader.style.cssText = `color: white;`
    projectsHeaderBox.style.cssText = `
    background-color: rgba(20,19,27,0.95);
    box-shadow: 0 0 1px white;
    `
    snakeBox.style.cssText = `
    box-shadow: 0 0 2px white;
    background-color: rgba(20,19,27,0.95);
    `;
    snakeIcon.style.cssText = `
    color: goldenrod;
    `
    snakeHeader.style.cssText = `
    background-color:  hsl(250,17%,5%);
    color: white;
    box-shadow: 0 0 1px white;
    `;
    diceBox.style.cssText = `
    box-shadow: 0 0 2px white;
    background-color: rgba(20,19,27,0.95);
    `;
    diceIcon.style.cssText = `
    color: goldenrod;
    `;
    diceHeader.style.cssText = `
    background-color:  hsl(250,17%,5%);
    box-shadow: 0 0 1px white;
    color: white;
    `;

    footerToCenter.style.cssText = `
    background-color: hsl(250, 17%, 5%);
    box-shadow: 0 0 2px white;
    `
    footerSeparator.style.cssText = `
    background-color: hsl(250, 17%, 5%);
    box-shadow: 0 0 2px white;
    `
    discord.style.color = "var(--primaryLighter)";
    github.style.color = "var(--primaryLighter)";
    linkedin.style.color = "var(--primaryLighter)";

    footerHighlight.style.cssText = `
    color: goldenrod;
    `

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
    hamburgerIcon.style.cssText = `
    color: '';
    `
    hamburgerBox.style.cssText = `
    background-color: '';
    box-shadow: '';
    `
    burgerAboutNav.style.cssText = `
    color: '';
    `
    burgerProjectsNav.style.cssText = `
    color: '';
    `
    burgerHomeNav.style.cssText = `
    color: '';
    `
    lightGlow.style.display = 'none';

    backgroundOverlay.style.cssText = `
    background-color: "";
    `
    contactFormBox.style.cssText = `
    background-color: '';    
    box-shadow: '';
    `;
    popUpFormTextHighlight.style.color = "";

    popUpRightBox.style.cssText = `
    background-color: '';    
    `;
    popUpEmail.style.color = '';
    
    popUpDiscord.style.color = "var(--darkModeDark)";
    popUpGithub.style.color = "var(--darkModeDark)";
    popUpLinkedin.style.color = "var(--darkModeDark)";

    heroName.style.color = "";

    highlightText.style.cssText = `
    color: '';
    `;
    aboutMeHeader.style.cssText = `
    color: '';
    `;
    aboutMeHeaderBox.style.cssText = `
    background-color: '';
    box-shadow: '';    
    `;
    softSkillsHeaderBox.style.cssText = `
    background-color: '';
    box-shadow: '';
    `;
    softSkillsHeader.style.cssText = `
    color: '';
    `;
    softSkillsBox.style.cssText = `
    box-shadow: '';
    background-color: '';
    `;
    techStackHeaderBox.style.cssText = `
    background-color: '';
    box-shadow: '';
    `;
    techStackHeader.style.cssText = `
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
    projectsHeader.style.cssText = `
    color: '';
    `
    projectsHeaderBox.style.cssText = `
    background-color: '';
    box-shadow: '';
    `
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
    linkedin.style.color = "var(--darkModeDark)";


    footerHighlight.style.cssText = `
    color: '';
    `
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
// Hamburger Menu
const openBurger = () => {
    if (isOpen) {
       hamburgerBox.style.display = 'none' 
       isOpen = false;
    } else {
       hamburgerBox.style.display = 'block'; 
       isOpen
    } 
}
// Pop up close button
const closePopUp = () => {
    contactPopUpToCenter.style.cssText = `
    display: none;
    `;
    backgroundOverlay.style.display = 'none';
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

    contactPopUpToCenter.style.cssText = `
    display: initial;
    `
    backgroundOverlay.style.display = "block";
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
            footerText.style.display = 'flex';
            copyright.style.display = 'block';
            isExpanded = true;
        }
    } else if (isExpanded) {
        // If not at the bottom, shrink the footer back
        footerToCenter.classList.remove('expanded');
        footerSeparator.style.cssText = `position: absolute;`;
        footerSeparator.classList.remove('expanded');
        footerText.style.display = 'none';
        copyright.style.display = 'none';
        isExpanded = false;
    }
};

// Switch dice icons
const iconSwitcher = () => {
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

};



// ! Event Listeners
// Close pop up 
xIcon.addEventListener("click", closePopUp);

// Scroll to Home
homeNav.addEventListener("click", toHome);
gIcon.addEventListener("click", toHome);
burgerHomeNav.addEventListener("click", toHome);

// Scroll to About
aboutNav.addEventListener("click", toAbout);
heroArrow.addEventListener("click", toAbout);
burgerAboutNav.addEventListener("click", toAbout);

// Scroll to Projects
aboutArrowBox.addEventListener("click", toProjects);
projectsNav.addEventListener("click", toProjects);
burgerProjectsNav.addEventListener("click", toProjects);

// Scroll to Contact
contactButton.addEventListener("click", toContact);

// Dark/Light 
dark.addEventListener("click", darkMode);
light.addEventListener("click", lightMode);

// Start dice animations
document.addEventListener('DOMContentLoaded', iconSwitcher);
document.getElementById("contactFormBox").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Send the form data using fetch
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            // Success message
            document.getElementById("popUpFormTextHighlight").textContent = "Thank you! Your message has been sent successfully.";
            document.getElementById('message').value = '';

        } else {
            // Error message
            document.getElementById("popUpFormTextHighlight").textContent = "Oops! There was a problem submitting your form. Please try again. Or alternatively, email me directly by clicking the email link.";
        }
    }).catch(error => {
        // Handle network errors
        document.getElementById("popUpFormTextHighlight").textContent = "An error occurred while submitting the form. Please check your connection and try again.";
    });
});
// Burger Icon
hamburgerIcon.addEventListener("click", openBurger);

// Initialize with dark mode
isDarkMode ? darkMode() : lightMode();

