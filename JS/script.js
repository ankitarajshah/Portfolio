// ===========================  typing animation ============================ //

var typed = new Typed(".typing", {
    strings: ["", "Front End Developer", "Back End Developer", "Full Stack Developer"],
    typeSpeed: 50,
    loop: true,
    backDelay: 100,
    backSpeed: 30,
})


// ===========================  Aside   ============================ //


const nav = document.querySelector(".nav"),
    navList = document.querySelectorAll("li"),
    totalNavlist = navList.length,
    Allsection = document.querySelectorAll('.section'),
    totalSection = Allsection.length,
    navTogglerBtn = document.querySelector(".nav_toggler"),
    aside = document.querySelector(".aside");



for (let i = 0; i < totalNavlist; i++) {

    const a = navList[i].querySelector('a');

    a.addEventListener("click", function () {
        removeBackSection();

        for (let j = 0; j < totalNavlist; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                // Allsection[j].classList.add("back_section")
                addBackSection(j);
            }
            navList[j].querySelector('a').classList.remove("active")
        }

        this.classList.add("active")
        showSection(this)

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn()
        }
    })
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        Allsection[i].classList.remove("back_section")
    }
}

function addBackSection(ele) {
    Allsection[ele].classList.add("back_section")

}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        Allsection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn()
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open")
    navTogglerBtn.classList.toggle("open")
    for (let i = 0; i < totalSection; i++) {
        Allsection[i].classList.toggle("open")
    }
}

function updateNav(element) {
    //  element.getAttribute("href").split("#")[1];

    for (let i = 0; i < totalNavlist; i++) {
        navList[i].querySelector('a').classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];

        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector('a').classList.add("active");
        }
    }
}

document.querySelector(".hire_me").addEventListener("click", function () {
    // console.log(this);
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex)
})