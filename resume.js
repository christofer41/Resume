/** @type {HTMLDivElement} */
let introBox;

/** @type {HTMLDivElement} */
let experienceBox;

/** @type {HTMLDivElement} */
let studiesBox;

/** @type {HTMLDivElement} */
let linkBox;

/** @type {HTMLDivElement} */
let contactBox;

/** @type {HTMLDivElements} */
let allButtons;


window.addEventListener("load", initiatePage)

function initiatePage(){
    if (window.innerWidth < 800){
        setLinksForHamburger();
        
    }else{
        setButtons();
    }
    setBoxes();
    changeMousePointer();

    window.addEventListener("resize", onWindowResize)
    
}

function changeMousePointer(){
    allButtons = document.getElementsByClassName("navigationButtons");
    
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.cursor = "hand" ;
        allButtons[i].style.cursor = "pointer" ;
    }
}

function setBoxes(){
    introBox = document.getElementById("intro");
    experienceBox = document.getElementById("experience");
    studiesBox = document.getElementById("studies");
    linkBox = document.getElementById("link");
    contactBox = document.getElementById("contact");
}

function setButtons(){
    let introButton = document.getElementsByClassName("navigationButtons")[0];
    let experienceButton = document.getElementsByClassName("navigationButtons")[1];
    let studiesButton = document.getElementsByClassName("navigationButtons")[2];
    let linkButton = document.getElementsByClassName("navigationButtons")[3];
    let contactButton = document.getElementsByClassName("navigationButtons")[4];

    introButton.addEventListener("click", changeSceneToIntro);
    experienceButton.addEventListener("click", changeSceneToExperience);
    studiesButton.addEventListener("click", changeSceneToStudies);
    linkButton.addEventListener("click", changeSceneToLink);
    contactButton.addEventListener("click", changeSceneToContact);

}

function setLinksForHamburger(){
    let introButtonHamburger = document.getElementsByClassName("navigationButtons")[5];
    let experienceButtonHamburger = document.getElementsByClassName("navigationButtons")[6];
    let studiesButtonHamburger = document.getElementsByClassName("navigationButtons")[7];
    let linkButtonHamburger = document.getElementsByClassName("navigationButtons")[8];
    let contactButtonHamburger = document.getElementsByClassName("navigationButtons")[9];

    introButtonHamburger.addEventListener("click", jumpDownToIntro);
    experienceButtonHamburger.addEventListener("click", jumpDownToExperience);
    studiesButtonHamburger.addEventListener("click", jumpDownToStudies);
    linkButtonHamburger.addEventListener("click", jumpDownToLink);
    contactButtonHamburger.addEventListener("click", jumpDownToContact);
}

function hamburgerMenu() {
    var x = document.getElementById("linksForHamburger");

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function onWindowResize(){
    if (window.innerWidth < 800){
        introBox.style.display = "block";
        experienceBox.style.display = "block";
        studiesBox.style.display = "block";
        linkBox.style.display = "block";
        contactBox.style.display = "block"

        setLinksForHamburger();


    }
    else if (window.innerWidth > 799){
        changeSceneToIntro();
    }
}

function animateTheDiv(){
    document.getElementById("textContainer").className = "animateTextContainer"

    const interval = setInterval(function(){
        document.getElementById("textContainer").className = "";
        clearInterval(interval)
    }, 1000);
}

/**
 * We change the settings to fit the scene that we need
 */
function changeSceneToIntro(){

    if (window.innerWidth > 799){

        introBox.style.display = "grid";
        experienceBox.style.display = "none";
        studiesBox.style.display = "none";
        linkBox.style.display = "none";
        contactBox.style.display = "none"
        $(".boxesThirdQuarter").css("display", "none");
        $(".boxesSecondQuarter").css({"grid-column": "1","grid-row": "1 / 4"});
    }

}

function changeSceneToExperience(){
    
    if (window.innerWidth > 799){
        
        introBox.style.display = "none";
        experienceBox.style.display = "grid";
        studiesBox.style.display = "none";
        linkBox.style.display = "none";
        contactBox.style.display = "none";
        
        $(".boxesThirdQuarter").css("display", "grid");
        $(".boxesThirdQuarter").css({"grid-column": "1","grid-row": "1 / 2"});
        $(".boxesSecondQuarter").css({"grid-column": "1","grid-row": "2 / 4"});
        animateTheDiv();
    }
}

function changeSceneToStudies(){

    if (window.innerWidth > 799){

        introBox.style.display = "none";
        experienceBox.style.display = "none";
        studiesBox.style.display = "grid";
        linkBox.style.display = "none";
        contactBox.style.display = "none";
    
        $(".boxesThirdQuarter").css("display", "grid");
        $(".boxesThirdQuarter").css({"grid-column": "1","grid-row": "1 / 2"});
        $(".boxesSecondQuarter").css({"grid-column": "1","grid-row": "2 / 4"});
    }
}

function changeSceneToLink(){

    if (window.innerWidth > 799){

        introBox.style.display = "none";
        experienceBox.style.display = "none";
        studiesBox.style.display = "none";
        linkBox.style.display = "grid";
        contactBox.style.display = "none";
    
        $(".boxesThirdQuarter").css("display", "grid");
        $(".boxesThirdQuarter").css({"grid-column": "1","grid-row": "1 / 2"});
        $(".boxesSecondQuarter").css({"grid-column": "1","grid-row": "2 / 4"});
    }
}

function changeSceneToContact(){

    if (window.innerWidth > 799){

        introBox.style.display = "none";
        experienceBox.style.display = "none";
        studiesBox.style.display = "none";
        linkBox.style.display = "none";
        contactBox.style.display = "grid";
    
        $(".boxesThirdQuarter").css("display", "grid");
        $(".boxesThirdQuarter").css({"grid-column": "1","grid-row": "1 / 2"});
        $(".boxesSecondQuarter").css({"grid-column": "1","grid-row": "2 / 4"});
    }
}

function jumpDownToIntro(){
    introBox.scrollIntoView();
    var x = document.getElementById("linksForHamburger");
    x.style.display = "none";
}
function jumpDownToExperience(){
    experienceBox.scrollIntoView();
    var x = document.getElementById("linksForHamburger");
    x.style.display = "none";
}
function jumpDownToStudies(){
    studiesBox.scrollIntoView();
    var x = document.getElementById("linksForHamburger");
    x.style.display = "none";
}
function jumpDownToLink(){
    linkBox.scrollIntoView();
    var x = document.getElementById("linksForHamburger");
    x.style.display = "none";
}
function jumpDownToContact(){
    contactBox.scrollIntoView();
    var x = document.getElementById("linksForHamburger");
    x.style.display = "none";
}