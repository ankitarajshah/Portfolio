 // toggle style switcher start


 const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
 styleSwitcherToggle.addEventListener("click",() => {
	a = document.querySelector(".style-switcher").classList.toggle("open");
 })

 // hide style switcher

window.addEventListener("scroll",()=>{
if(document.querySelector(".style-switcher").classList.contains("open"))
{
	document.querySelector(".style-switcher").classList.remove("open");
}
 })

// toggle style switcher end


const alternatestyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{

	alternatestyles.forEach((style)=>{
		if(color === style.getAttribute("title"))
		{
			style.removeAttribute("disabled");
		}
		else
		{
			style.setAttribute("disabled","true")	
		}
	})
}  

 // theme light and dark mode

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
	 a = dayNight.querySelector("i").classList.toggle("fa-sun");
	dayNight.querySelector("i").classList.toggle("fa-moon");	
	document.body.classList.toggle("dark")
})
window.addEventListener("load", () =>{
	if(document.body.classList.contains("dark"))
	{
		dayNight.querySelector("i").classList.add("fa-sun");
	}
	else
	{
		dayNight.querySelector("i").classList.add("fa-moon");	
	}
})