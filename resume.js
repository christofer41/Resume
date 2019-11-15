let introButton = document.getElementsByClassName("navigationButtons")[0];
let experienceButton = document.getElementsByClassName("navigationButtons")[1];
let studiesButton = document.getElementsByClassName("navigationButtons")[2];
let linkButton = document.getElementsByClassName("navigationButtons")[3];
let contactButton = document.getElementsByClassName("navigationButtons")[4];

let introBox = document.getElementById("intro");
let experienceBox = document.getElementById("experience");
let studiesBox = document.getElementById("studies");
let linkBox = document.getElementById("link");
let contactBox = document.getElementById("contact");

let allButtons = document.getElementsByClassName("navigationButtons");


introButton.addEventListener("click", changeSceneToIntro);
experienceButton.addEventListener("click", changeSceneToExperience);
studiesButton.addEventListener("click", changeSceneToStudies);
linkButton.addEventListener("click", changeSceneToLink);
contactButton.addEventListener("click", changeSceneToContact);


for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].style.cursor = "hand" ;
    allButtons[i].style.cursor = "pointer" ;
}

function changeSceneToIntro(){
    introBox.style.display = "grid";
    experienceBox.style.display = "none";
    studiesBox.style.display = "none";
    linkBox.style.display = "none";
    contactBox.style.display = "none"

    $(".boxesFirstQuarter").css("display", "none");
    $(".boxesSecondQuarter").css({"grid-column": "1","grid-row": "1 / 4"});
}

function changeSceneToExperience(){
    introBox.style.display = "none";
    experienceBox.style.display = "grid";
    studiesBox.style.display = "none";
    linkBox.style.display = "none";
    contactBox.style.display = "none";

    $(".boxesFirstQuarter").css("display", "grid");
    $(".boxesFirstQuarter").css({"grid-column": "1","grid-row": "1 / 2"});
    $(".boxesSecondQuarter").css({"grid-column": "1","grid-row": "2 / 4"});
}

function changeSceneToStudies(){
    introBox.style.display = "none";
    experienceBox.style.display = "none";
    studiesBox.style.display = "grid";
    linkBox.style.display = "none";
    contactBox.style.display = "none";
}

function changeSceneToLink(){
    introBox.style.display = "none";
    experienceBox.style.display = "none";
    studiesBox.style.display = "none";
    linkBox.style.display = "grid";
    contactBox.style.display = "none";
}

function changeSceneToContact(){
    introBox.style.display = "none";
    experienceBox.style.display = "none";
    studiesBox.style.display = "none";
    linkBox.style.display = "none";
    contactBox.style.display = "grid";
}