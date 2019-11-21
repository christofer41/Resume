/** @type {HTMLDivElement} */
let introBox;

/** @type {HTMLDivElement} */
let experienceBox;

/** @type {HTMLDivElement} */
let studiesBox;

/** @type {HTMLDivElement} */
let referencesBox;

/** @type {HTMLDivElement} */
let contactBox;

/** @type {HTMLDivElements} */
let allButtons;

/** Will initate when page is loaded */
window.addEventListener("load", initiatePage)

/** will initate when page is loaded */
window.addEventListener("resize", onWindowResize)

/**
 * @event pageloaded #- When the page has been loaded
 */
function initiatePage(){
    if (window.innerWidth < 800){   //If we need to load the page for phone or for desktop
        setLinksForHamburger();
        checkSavedInfo();
        
    }else{
        setButtons();
    }
    setBoxes();
    changeMousePointer();
}

/**
 * Will change the mouse pointer when holding over the buttons
 */
function changeMousePointer(){
    allButtons = document.getElementsByClassName("navigationButtons");
    
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.cursor = "hand" ;
        allButtons[i].style.cursor = "pointer" ;
    }
}

/**
 * @type {HTMLElement}
 * We set all the boxes to variables
 */
function setBoxes(){
    introBox = document.getElementById("intro");
    experienceBox = document.getElementById("experience");
    studiesBox = document.getElementById("studies");
    referencesBox = document.getElementById("references");
    contactBox = document.getElementById("contact");
}

/**
 * @type {HTMLElement}
 * We set all the buttons to variables and then attach eventListeners to them
 */
function setButtons(){
    let introButton = document.getElementsByClassName("navigationButtons")[0];
    let experienceButton = document.getElementsByClassName("navigationButtons")[1];
    let studiesButton = document.getElementsByClassName("navigationButtons")[2];
    let referencesButton = document.getElementsByClassName("navigationButtons")[3];
    let contactButton = document.getElementsByClassName("navigationButtons")[4];

    introButton.addEventListener("click", changeSceneToIntro);
    experienceButton.addEventListener("click", changeSceneToExperience);
    studiesButton.addEventListener("click", changeSceneToStudies);
    referencesButton.addEventListener("click", changeSceneToReferences);
    contactButton.addEventListener("click", changeSceneToContact);

}

/**
 * @type {HTMLElement}
 * We set all the buttons to variables and then attach eventListeners to them
 */
function setLinksForHamburger(){
    let introButtonHamburger = document.getElementsByClassName("navigationButtons")[5];
    let experienceButtonHamburger = document.getElementsByClassName("navigationButtons")[6];
    let studiesButtonHamburger = document.getElementsByClassName("navigationButtons")[7];
    let referencesButtonHamburger = document.getElementsByClassName("navigationButtons")[8];
    let contactButtonHamburger = document.getElementsByClassName("navigationButtons")[9];

    introButtonHamburger.addEventListener("click", jumpDownToIntro);
    experienceButtonHamburger.addEventListener("click", jumpDownToExperience);
    studiesButtonHamburger.addEventListener("click", jumpDownToStudies);
    referencesButtonHamburger.addEventListener("click", jumpDownToReferences);
    contactButtonHamburger.addEventListener("click", jumpDownToContact);
}

/**
 * We make it so that the hamburger menu can be turned off and on
 */
function hamburgerMenu() {
    var x = document.getElementById("linksForHamburger");

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

/**
 * @event onResize # - It checks if we need to change from phone mode to desktop mode, or the other way around
 */
function onWindowResize(){
    if (window.innerWidth < 800){
        introBox.style.display = "block";
        experienceBox.style.display = "block";
        studiesBox.style.display = "block";
        referencesBox.style.display = "block";
        contactBox.style.display = "block"

        setLinksForHamburger();


    }
    else if (window.innerWidth > 799 && introBox.style.display == "block"){
        introBox.style.display = "grid";
        experienceBox.style.display = "none";
        studiesBox.style.display = "none";
        referencesBox.style.display = "none";
        contactBox.style.display = "none"

        $(".boxesFirstQuarter").css({"grid-column": "2","grid-row": "1 / 2"});
        $(".boxesSecondQuarter").css({"grid-column": "1","grid-row": "1 / 4"});
        $(".boxesForthQuarter").css({"grid-column": "2","grid-row": "2 / 4"});

        $(".boxesFirstQuarter").css("display", "grid");
        $(".boxesSecondQuarter").css("display", "block");
        $(".boxesForthQuarter").css("display", "block");

        var x = document.getElementById("linksForHamburger");
        x.style.display = "none";

        checkSavedInfo();
        setButtons();
    }
}

/**
 * @event animateDiv # - This function allows the text container to be animated when the user switches between them.
 */
function animateTheDiv(){
    document.getElementById("textContainer").className = "animateTextContainer"

    const interval = setInterval(function(){
        document.getElementById("textContainer").className = "";
        clearInterval(interval)
    }, 300);
}


/**
 * @event submitTheForm # - This function saves the info, and displays the "sentMessage" box
 */
function submitForm(){

    const sentMessageBigBox = document.getElementById("sentMessageBigBox"); 
    const confirmMessageButtons = document.getElementById("confirmMessageButton");
    var userName = document.getElementById("userName");
    var userEmail = document.getElementById("userEmail");
    
    sentMessageBigBox.style.display = "flex";
    confirmMessageButtons.addEventListener("click", removeSubmitForm)

    saveTheInfo();
}

/**
 *@event removesTheBox # - This function will remove the "sentMessage" box
 */
function removeSubmitForm(){
    const sentMessageBigBox = document.getElementById("sentMessageBigBox"); 
    sentMessageBigBox.style.display = "none";
}

/**
 *@event saveInfo # - We save the info entered
 */
function saveTheInfo(){
    localStorage.userName = JSON.stringify(userName.value);
    localStorage.userEmail = JSON.stringify(userEmail.value);
}

/**
 * We check if we have any info saved
 */
function checkSavedInfo(){
    if (localStorage.userName) {
        userName.value = JSON.parse(localStorage.userName);
    }
    if (localStorage.userEmail) {
        userEmail.value = JSON.parse(localStorage.userEmail);
    }
}

/**
 * We change the settings to fit the scene that we need
 */
function changeSceneToIntro(){

    animateTheDiv();
    const interval = setInterval(function(){
        if (window.innerWidth > 799){

            introBox.style.display = "grid";
            experienceBox.style.display = "none";
            studiesBox.style.display = "none";
            referencesBox.style.display = "none";
            contactBox.style.display = "none"

            $(".boxesFirstQuarter").css({"grid-column": "2","grid-row": "1 / 2"});
            $(".boxesSecondQuarter").css({"grid-column": "1","grid-row": "1 / 4"});
            $(".boxesForthQuarter").css({"grid-column": "2","grid-row": "2 / 4"});

            $(".boxesFirstQuarter").css("display", "grid");
            $(".boxesSecondQuarter").css("display", "block");
            $(".boxesForthQuarter").css("display", "block");
        }
        clearInterval(interval)
    }, 150);
}

/**
 * We change the settings to fit the scene that we need
 */
function changeSceneToExperience(){
    animateTheDiv();
    const interval = setInterval(function(){
        if (window.innerWidth > 799){
            
            introBox.style.display = "none";
            experienceBox.style.display = "grid";
            studiesBox.style.display = "none";
            referencesBox.style.display = "none";
            contactBox.style.display = "none";
            
            $(".boxesFirstQuarter").css("display", "block");
            $(".boxesSecondQuarter").css("display", "block");

            $(".boxesFirstQuarter").css({"grid-column": "1","grid-row": "1 / 4"});
            $(".boxesSecondQuarter").css({"grid-column": "2","grid-row": "1 / 4"});
        }
        clearInterval(interval)
    }, 150);
}

/**
 * We change the settings to fit the scene that we need
 */
function changeSceneToStudies(){

    animateTheDiv();
    const interval = setInterval(function(){
        if (window.innerWidth > 799){
        
            introBox.style.display = "none";
            experienceBox.style.display = "none";
            studiesBox.style.display = "grid";
            referencesBox.style.display = "none";
            contactBox.style.display = "none";
            
            $(".boxesFirstQuarter").css("display", "block");

            $(".boxesFirstQuarter").css({"grid-column": "1/4","grid-row": "1 / 4"});
        }
        clearInterval(interval)
    }, 150);
}

/**
 * We change the settings to fit the scene that we need
 */
function changeSceneToReferences(){

    animateTheDiv();
    const interval = setInterval(function(){
        if (window.innerWidth > 799){
        
            introBox.style.display = "none";
            experienceBox.style.display = "none";
            studiesBox.style.display = "none";
            referencesBox.style.display = "grid";
            contactBox.style.display = "none";
        
            $(".boxesFirstQuarter").css("display", "block");
            $(".boxesSecondQuarter").css("display", "block");

            $(".boxesFirstQuarter").css({"grid-column": "1","grid-row": "1 / 4"});
            $(".boxesSecondQuarter").css({"grid-column": "2","grid-row": "1 / 4"});
        }
        clearInterval(interval)
    }, 150);
}

/**
 * We change the settings to fit the scene that we need
 */
function changeSceneToContact(){
    
    animateTheDiv();
    const interval = setInterval(function(){
        
        if (window.innerWidth > 799){
        
            introBox.style.display = "none";
            experienceBox.style.display = "none";
            studiesBox.style.display = "none";
            referencesBox.style.display = "none";
            contactBox.style.display = "grid";
        
            $(".boxesFirstQuarter").css("display", "block");
            $(".boxesSecondQuarter").css("display", "block");

            $(".boxesFirstQuarter").css({"grid-column": "1/4","grid-row": "1"});
            $(".boxesSecondQuarter").css({"grid-column": "1/4","grid-row": "2"});

            checkSavedInfo()

        }
        clearInterval(interval)
    }, 150);
}

/** This function allows the user to jump down to the selected box. */
function jumpDownToIntro(){
    introBox.scrollIntoView();
    var x = document.getElementById("linksForHamburger");
    x.style.display = "none";
}

/** This function allows the user to jump down to the selected box. */
function jumpDownToExperience(){
    experienceBox.scrollIntoView();
    var x = document.getElementById("linksForHamburger");
    x.style.display = "none";
}

/** This function allows the user to jump down to the selected box. */
function jumpDownToStudies(){
    studiesBox.scrollIntoView();
    var x = document.getElementById("linksForHamburger");
    x.style.display = "none";
}

/** This function allows the user to jump down to the selected box. */
function jumpDownToReferences(){
    referencesBox.scrollIntoView();
    var x = document.getElementById("linksForHamburger");
    x.style.display = "none";
}

/** This function allows the user to jump down to the selected box. */
function jumpDownToContact(){
    contactBox.scrollIntoView();
    var x = document.getElementById("linksForHamburger");
    x.style.display = "none";
}