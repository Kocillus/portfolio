window.onload = function(){

const pl=[".O MNIE", 
"Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.", 
".CO ROBIĘ?", 
"Kreatwność", 
"Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.", 
"Kodowanie", "Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.",
 "WWW", 
 "Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.", 
 ".AKTWNE PROJEKTY", 
 "Projekt 1", 
 "Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.", 
 "Projekt 2", 
 "Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.", 
 "Projekt 3", 
 "Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.", 
 "Wszystkie prawa zastrzeżone © 2022"];

const en=[".ABOUT ME", 
"Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", 
".WHAT I'M DOING", 
"Creativity", 
"Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", 
"Coding", 
"Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", 
"WWW", 
"Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", 
".ACTIVE PROJECTS", 
"Project 1", 
"Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", 
"Project 2", 
"Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", 
"Project 3", 
"Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", 
"All rights reserved © 2022"];

const elements=[
"about-me-title",
"about-me-content",
"whatdo-title",
"whatdo-title-1",
"whatdo-content-1",
"whatdo-title-2",
"whatdo-content-2",
"whatdo-title-3",
"whatdo-content-3",
"projects-title",
"project-1-title",
"project-1-content",
"project-2-title",
"project-2-content",
"project-3-title",
"project-3-content",
"footer"
];

const button_en = document.getElementById("buttonen");
    button_en.onclick = function () {
        changeLanguage("en");
    }

const button_pl = document.getElementById("buttonpl");
    button_pl.onclick = function () {
        changeLanguage("pl");
    }

function changeLanguage(language) {
    let languageArray;
    if (language == "pl") {
        languageArray = pl;
    }
    else {
        languageArray = en;
    }
    for (let i=0; i<elements.length; i++) {
        let element = document.getElementById(elements[i]);
        element.innerHTML = languageArray[i];
    }
}

}