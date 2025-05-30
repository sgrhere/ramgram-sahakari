//  Adding sticky navbar
const header = document.querySelector('header');

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY >= 55);
});



// Dark Theme
//get the theme button, and define class names for dark theme and sun icon
const themeButton = document.getElementById("theme-button");
const darkTheme= "dark-theme";
const iconTheme = "bx-sun";

//Retrieve user's selected theme and icon preferences from local storage
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//define a function to determine the current theme
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme)? "dark": "light";
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme)? "bx-moon": "bx-sun";

//if there's a selected theme from local storage
if (selectedTheme){
    //apply the selected theme class to the document body
    document.body.classList[selectedTheme==="dark"?"add":"remove"](darkTheme);
    //apply the selected icon class to the theme button
    themeButton.classList[selectedIcon==="bx-moon"?"add":"remove"](iconTheme);

    //if the selected theme is dark, set the icon to white
    if(selectedTheme==="dark"){
        themeButton.style.color = "#fff";
    }
}

//add an event listener for clicks on the theme button
themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    themeButton.classList.toggle("bx-moon");
    //change the icon color to white in dark mode, or reset to default in light mode
    if(getCurrentTheme()=== "dark"){
        themeButton.style.color ="#fff";
    }
    else{
        themeButton.style.color= "";
    }
    //add a transition effect for a smooth theme change 
    document.body.style.transition= "background-color 1s";

    //save the current theme and icon choice in local storage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

//add an evenet listener to remove the trasnsition effect after it's completed
document.body.addEventListener('transitionend', ()=>{
    document.body.style.transition= "";
});

// Menu Icon
// selecting the menu icon
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

//adding a click event listener to the menu icon
menu.onclick = (e)=>{
    // prevent the default behaviour of the link
    e.preventDefault();

    // toggle the class "bx-x" on the menu icon
    menu.classList.toggle("bx-x");
    // toggle the class "open" on the navbar
    navbar.classList.toggle("open");
};

