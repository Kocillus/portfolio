window.onload = function(){

const pl=[".O MNIE", "Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.", ".CO ROBIĘ?", "Kreatwność", "Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.", "Kodowanie", "Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.", "WWW", "Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.", ".AKTWNE PROJEKTY", "Projekt 1", "Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.", "Projekt 2", "Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.", "Projekt 3", "Litwo! Ojczyzno moja! ty jesteś jak zdrowie: Ile cię trzeba cenić, ten tylko się dowie, kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.", "Wszystkie prawa zastrzeżone © 2022"];
const en=[".ABOUT ME", "Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", ".WHAT I'M DOING", "Creativity", "Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", "Coding", "Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", "WWW", "Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", ".ACTIVE PROJECTS", "Project 1", "Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", "Project 2", "Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", "Project 3", "Welcome, gentlemen! ladies that have their toes, Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all. Will now deny to dance? she that makes dainty.", "All rights reserved © 2022"];

const about_me_tittle=document.getElementById("about-me-title");
const about_me_content=document.getElementById("about-me-content");
const whatdo_title=document.getElementById("whatdo-title")
const whatdo_title_1=document.getElementById("whatdo-title-1");
const whatdo_content_1=document.getElementById("whatdo-content-1");
const whatdo_title_2=document.getElementById("whatdo-title-2");
const whatdo_content_2=document.getElementById("whatdo-content-2");
const whatdo_title_3=document.getElementById("whatdo-title-3");
const whatdo_content_3=document.getElementById("whatdo-content-3");
const projects_title=document.getElementById("projects-title");
const project_title_1=document.getElementById("project-1-title");
const project_content_1=document.getElementById("project-1-content");
const project_title_2=document.getElementById("project-2-title");
const project_content_2=document.getElementById("project-2-content");
const project_title_3=document.getElementById("project-3-title");
const project_content_3=document.getElementById("project-3-content");
const footer=document.getElementById("footer");

    const button_en = document.getElementById("buttonen");
    button_en.onclick = function () {
        currentLanguage="en";
        about_me_tittle.innerHTML=en[0];
        about_me_content.innerHTML=en[1];
        whatdo_title.innerHTML=en[2];
        whatdo_title_1.innerHTML=en[3]
        whatdo_content_1.innerHTML=en[4]
        whatdo_title_2.innerHTML=en[5]
        whatdo_content_2.innerHTML=en[6]
        whatdo_title_3.innerHTML=en[7]
        whatdo_content_3.innerHTML=en[8]
        projects_title.innerHTML=en[9]
        project_title_1.innerHTML=en[10]
        project_content_1.innerHTML=en[11]
        project_title_2.innerHTML=en[12]
        project_content_2.innerHTML=en[13]
        project_title_3.innerHTML=en[14]
        project_content_3.innerHTML=en[15]
        footer.innerHTML=en[16]
    };

    const button_pl = document.getElementById("buttonpl");
    button_pl.onclick = function () {
        currentLanguage="pl";
        about_me_tittle.innerHTML=pl[0];
        about_me_content.innerHTML=pl[1];
        whatdo_title.innerHTML=pl[2];
        whatdo_title_1.innerHTML=pl[3]
        whatdo_content_1.innerHTML=pl[4]
        whatdo_title_2.innerHTML=pl[5]
        whatdo_content_2.innerHTML=pl[6]
        whatdo_title_3.innerHTML=pl[7]
        whatdo_content_3.innerHTML=pl[8]
        projects_title.innerHTML=pl[9]
        project_title_1.innerHTML=pl[10]
        project_content_1.innerHTML=pl[11]
        project_title_2.innerHTML=pl[12]
        project_content_2.innerHTML=pl[13]
        project_title_3.innerHTML=pl[14]
        project_content_3.innerHTML=pl[15]
        footer.innerHTML=pl[16]
    };
};