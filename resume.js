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

window.addEventListener("load", initiatePage)

function initiatePage(){
    let introButton = document.getElementsByClassName("navigationButtons")[0];
    let experienceButton = document.getElementsByClassName("navigationButtons")[1];
    let studiesButton = document.getElementsByClassName("navigationButtons")[2];
    let linkButton = document.getElementsByClassName("navigationButtons")[3];
    let contactButton = document.getElementsByClassName("navigationButtons")[4];
    
    introBox = document.getElementById("intro");
    experienceBox = document.getElementById("experience");
    studiesBox = document.getElementById("studies");
    linkBox = document.getElementById("link");
    contactBox = document.getElementById("contact");
    
    let allButtons = document.getElementsByClassName("navigationButtons");

    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.cursor = "hand" ;
        allButtons[i].style.cursor = "pointer" ;
    }

    introButton.addEventListener("click", changeSceneToIntro);
    experienceButton.addEventListener("click", changeSceneToExperience);
    studiesButton.addEventListener("click", changeSceneToStudies);
    linkButton.addEventListener("click", changeSceneToLink);
    contactButton.addEventListener("click", changeSceneToContact);

    window.addEventListener("resize", onWindowResize)
}

function onWindowResize(){
    if (window.innerWidth < 800){
        introBox.style.display = "block";
        experienceBox.style.display = "block";
        studiesBox.style.display = "block";
        linkBox.style.display = "block";
        contactBox.style.display = "block"
    }
    else if (window.innerWidth > 799){
        changeSceneToIntro();
    }
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
        $(".boxesFirstQuarter").css("display", "none");
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
    
        $(".boxesFirstQuarter").css("display", "grid");
        $(".boxesFirstQuarter").css({"grid-column": "1","grid-row": "1 / 2"});
        $(".boxesSecondQuarter").css({"grid-column": "1","grid-row": "2 / 4"});
    }
}

function changeSceneToStudies(){

    if (window.innerWidth > 799){

        introBox.style.display = "none";
        experienceBox.style.display = "none";
        studiesBox.style.display = "grid";
        linkBox.style.display = "none";
        contactBox.style.display = "none";
    
        $(".boxesFirstQuarter").css("display", "grid");
        $(".boxesFirstQuarter").css({"grid-column": "1","grid-row": "1 / 2"});
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
    
        $(".boxesFirstQuarter").css("display", "grid");
        $(".boxesFirstQuarter").css({"grid-column": "1","grid-row": "1 / 2"});
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
    
        $(".boxesFirstQuarter").css("display", "grid");
        $(".boxesFirstQuarter").css({"grid-column": "1","grid-row": "1 / 2"});
        $(".boxesSecondQuarter").css({"grid-column": "1","grid-row": "2 / 4"});
    }
}