const styleSwitchToggler = document.querySelector('.style_switcher_toggler');
styleSwitchToggler.addEventListener('click', () => {
    document.querySelector('.style_switcher').classList.toggle('open');
})

// hide style switcher on scroll 
const activeSection = document.querySelectorAll("section"); 
// console.log(activeSection);
for(let i = 0; i<activeSection.length;i++)
activeSection[i].addEventListener("scroll", () => {
    if (document.querySelector('.style_switcher').classList.contains('open')) {
        document.querySelector('.style_switcher').classList.remove('open');
    }
})


// ========================= theme color ================================ //


const alternateStyle = document.querySelectorAll(".alternate_style");

function setActivestyle(color){
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled", "true")
            
        }
    })
}


// ========================= theme dark and night ================================ //
const dayNight = document.querySelector(".day_night")

dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector('i').classList.replace("fa-moon","fa-sun" )
    }
    else{
        dayNight.querySelector('i').classList.replace("fa-sun","fa-moon")
    }
} )


