const LANGUAGES = Object.freeze({
    PORTUGUESE : 0,
    ENGLISH : 1,
});

class LanguageData{
    constructor(id, arrKeys){
        this.id = id;
        this.arrKeys = arrKeys;
    }
}

var langDataArr = [];
var langCurrent = LANGUAGES.PORTUGUESE;

function add(id, arrkey){
    langDataArr.push(new LanguageData(id, arrkey));
}
add("langButton", [
    "English",
    "Português"
])

add("about1", [
    "Tenho 6 anos de experiência como programador e desenvolvedor de jogos digitais, com domínio em C#, Javascript, GML e Java. Sou formado em Jogos Digitais pela Estácio e Graduando em Sistemas e Mídias Digitais na Faculdade Federal do Ceará (UFC).",
    "I have 6 years of experience as a programmer and game developer. com domínio em C#, Javascript, GML e Java. Sou formado em Jogos Digitais pela Estácio e Graduando em Sistemas e Mídias Digitais na Faculdade Federal do Ceará (UFC)."
]);

add("about2", [
    'Co-fundei, em 2018, a <a href="https://twitter.com/RoadoutGame" target=”_blank”>Rastrolabs Games Studio</a>, empresa focada em desenvolvimento de jogos digitais e uma das principais empresas do ramo no estado do Ceará.' + 
    'Atualmente estamos desenvolvendo o jogo <a href="https://store.steampowered.com/app/1829270/RoadOut/" target=”_blank” >RoadOut</a>,' + 
    'um jogo de ação e aventura, que será publicado em parceria com a <a href="https://dangenentertainment.com/">DANGEN Entertainment</a>.',

    'Co-fundei, em 2018, a <a href="https://twitter.com/RoadoutGame" target=”_blank”>Rastrolabs Games Studio</a>, empresa focada em desenvolvimento de jogos digitais e uma das principais empresas do ramo no estado do Ceará.' + 
    'Atualmente estamos desenvolvendo o jogo <a href="https://store.steampowered.com/app/1829270/RoadOut/" target=”_blank” >RoadOut</a>,' + 
    'um jogo de ação e aventura, que será publicado em parceria com a <a href="https://dangenentertainment.com/">DANGEN Entertainment</a>.',
]);

function changeLanguage(){
    langDataArr.forEach(function(item){
        console.log(item);
        let element = document.getElementById(item.id);
        element.innerHTML = item.arrKeys[langCurrent];
    })

    if(langCurrent == LANGUAGES.PORTUGUESE)
        langCurrent = LANGUAGES.ENGLISH 
    else 
        langCurrent = LANGUAGES.PORTUGUESE;
}

document.addEventListener("DOMContentLoaded", changeLanguage);

