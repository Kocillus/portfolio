window.onload = function(){

const pl=[".O MNIE", 
"Hej, nazywam się Janek! Jestem studentem z Poznania, który w trakcie nauki złapał bakcyla na kodowanie. W chwilach wolnych od stukania w klawiaturę uwielbiam oddawać się sportowi, szczególnie sztuką walki oraz strzelectwu. Jedną z moich największych pasji jest tresura oraz behawiorystyka psów. Jestem również zapalonym górołazem i włóczykijem, niewykluczone że kiedyś minęliśmy się na szlaku! Aktualnie poszukuję pracy/stażu w miejscu, które pozwoli mi rozwijać swoje umiejętności oraz karierę. <b>:-)</b>", 
".CO ROBIĘ?", 
"TWORZENIE STRON WWW", 
"Największe doświadczenia posiadam w pracy z duetem HTML + CSS, do którego coraz chętniej dodaję JavaScript. Posiadam także doświadczenie w projektach opartych o Wordpress. W najbliższym czasie planuję również poszerzenie swoich umiejętności o Node.js, React.js, Bootstrap oraz UI/UX Design.", 
"KODOWANIE", 
"Jako junior programer lwią część swojego wolnego czasu poświęcam na kodowaniu. Praktyka jest najlepszą nauczycielką, jak to mawiają. Oprócz języków HTML i CSS, planuję rozwój także w kierunku Pythona oraz Javy.",
 "ROZWÓJ", 
 "Inwestycja w rozwój siebie oraz swoich kompetencji powinien być naturalną potrzebą każdego człowieka. Dlatego na każdym kroku staram się zdobywać nową wiedzę, poszerzać horyzonty i utrwalać to czego zdołałem się do tej pory nauczyć. Tyczy się to nie tylko drogi kariery, ale także życia osobistego.", 
 ".AKTWNE PROJEKTY", 
 "STRONA DLA PETSITTERA", 
 "Jako pasjonat psów oraz osoba, która dorabiało w petsittingu, zdaję sobie sprawę jaką rolę odgrywa w tej branży dobra wizytówka. Szczególnie internetowa. Był to jeden z projektów, który kiedyś trafił do szuflady, jednak teraz wrócił na warsztat.", 
 "NAUKA JS-a", 
 "Aktualnie rozwijam się w kierunku lepszej znajomości JavaScript. Pierwszy z opracowywanych przeze mnie skryptów, który trafił do użytku, jest zaimplementowany na tej stronie. Dynamiczna zmiana języka to pierwszy krok. Reszta nadciąga!", 
 "NOWA STRONA DLA STAJNI", 
 "Pracuję nad prostą, przejrzystą i łatwą w edycji stroną opartą o Wordpress, która pozwoli osobie starszej, mającej się bakier z technologią, na zaznaczenie swojej obecności w sieci, a także proste zarządzanie treścią witryny.", 
 "Wszystkie prawa zastrzeżone © 2022"];

const en=[".ABOUT ME", 
"Hey, my name is Janek! I'm a student from Poznań who became interested in coding during my historical studies. When I'mm free from tapping the keyboard, I love to engage in sports, especially martial arts and shooting. One of my greatest passions is dog training and behavior. I am also a fan of mountain hiking and a wandering, it is possible that we once missed each other on the trail! I am currently looking for a job / internship in a place that will allow me to develop my skills and career. <b> :-) </b>", 
".WHAT I'M DOING", 
"CREATING WWW PAGES", 
"I have the most experience in working with the HTML + CSS duo, I'm starting to add JavaScript to my webpages too. I also has experience in Wordpress projects. In the near future, I want to expand my skills with Node.js, React.js, Bootstrap and UI / UX Design.", 
"CODING", 
"As a junior programmer, I spend a lot of my free time on coding. Practice is the best teacher, as they say. In addition to HTML and CSS, I also plan to develop towards Python and Java.", 
"SELF-DEVELOPMENT", 
"Investments in the development of each person and their competences should be a natural need of every human being. Therefore, at every step I gain new knowledge, broaden my own horizons and continue work. This applies not only to my career path, but also to my personal life.", 
".ACTIVE PROJECTS", 
"PETSITTER WEBPAGE", 
"As a dog enthusiast and a person who earned extra money in petsitting, I'm aware of the role that a good showcase plays in this industry. Especially in the internet. It was one of the designs that once fell into drawer, but now I'm giving it a chance.", 
"JS LEARNING", 
"I'm currently developing towards a better knowledge of JavaScript. The first of the scripts that I am developing that has come into use is implemented on this website. Changing the language dynamically is the first step. The next one is coming!", 
"NEW WEBPAGE TO STABLE", 
"I am working on a simple, clean and easy-to-edit Wordpress site that will allow an elderly person who is not tech-savvy to mark their presence on the web, as well as simply managing the content of this new site.", 
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