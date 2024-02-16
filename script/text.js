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

function add(id, arrkey){
    langDataArr.push(new LanguageData(id, arrkey));
}

add("about1", [
    "Tenho 6 anos de experiência como programador e desenvolvedor de jogos digitais, com domínio em C#, Javascript, GML e Java. Sou formado em Jogos Digitais pela Estácio e Graduando em Sistemas e Mídias Digitais na Faculdade Federal do Ceará (UFC).",
    "I have 6 years of experience as a programmer and digital game developer, proficient in C#, Javascript, GML, and Java. I graduated in Digital Games from Estácio and I'm currently pursuing a degree in Digital Systems and Media at the Federal University of Ceará (UFC)."
]);

add("about2", [
    'Co-fundei, em 2018, a <a href="https://twitter.com/RoadoutGame" target=”_blank”>Rastrolabs Games Studio</a>, empresa focada em desenvolvimento de jogos digitais e uma das principais empresas do ramo no estado do Ceará.' + 
    'Atualmente estamos desenvolvendo o jogo <a href="https://store.steampowered.com/app/1829270/RoadOut/" target=”_blank” >RoadOut</a>,' + 
    'um jogo de ação e aventura, que será publicado em parceria com a <a href="https://dangenentertainment.com/">DANGEN Entertainment</a>.',

    'I co-founded in 2018 the <a href="https://twitter.com/RoadoutGame" target="_blank">Rastrolabs Games Studio</a>, ' +
    'a company focused on digital game development and one of the leading companies in the field in the state of Ceará.' + 
    'Currently, we are developing the game <a href="https://store.steampowered.com/app/1829270/RoadOut/" target="_blank">RoadOut</a>,' +
    'an action-adventure game, which will be published in partnership with <a href="https://dangenentertainment.com/" target="_blank">DANGEN Entertainment</a>.'
]);

add("contatoInfo", [
    "Para falar comigo, basta escrever para o e-mail abaixo ou entrar em contato por meio das minhas redes sociais.",
    "To get in touch with me, simply write to the email below or reach out through my social media channels.",
])

add("contatoLabel", ["Contato", "Contact"]);
add("projetoLabel", ["Projetos", "Projects"]);
add("habilidadeLabel", ["Minhas Habilidades", "My Skills"])
add("hardSkill1", [
    "Tenho competências para trabalhar com desenvolvimento de Jogos Digitais com Unity (C#) e GameMaker (GML). Também tenho conhecimento em desenvolvimento full-stack e estou iniciando na área de Netcoding.", 
    "I have skills to work with Digital Game Development using Unity (C#) and GameMaker (GML). I also have knowledge in full-stack development and I am starting learning abount Netcoding."
])

add("hardSkill2", [
    "Abaixo você pode conferir minha afinidade com tecnologias e ferramentas, de pouco confortável (1) até bastente confortável (5).", 
    "Below you can check my proficiency with technologies and tools, ranging from not comfortable (1) to very comfortable (5)."
])

add("project_roadout0",[
    "RoadOut é um jogo de ação e aventura em produção desde 2021 com apoio e publicação pela DANGEN Enterteimen.", 
    "RoadOut is an action-adventure game in production since 2021 with support e publishing by DANGEN Entertainment."
])
add("project_roadout1", [
    "Lançamento previsto para 2024, para as plataformas PC, Nintendo Switch, XBOX Series X/S, Sony Playstation 5.",
    "Scheduled for release in 2024 on PC, Nintendo Switch, XBOX Series X/S, and Sony Playstation 5.",
]);
add("project_roadout2", [
    "Desenvolvido no GameMaker com GML.",
    "Developed in GameMaker with GML."
]);

add("project_capybara0", [
    "Capybara Hotel é um jogo no melhor estilo 'Onde está Wally?'. Durante a prototipação, foi utilizado o auxilio de ferramentas de IA para gerar código, assets visuais e sonoros, acelerando ainda mais o processo.",
    "Capybara Hotel is a game in the best 'Where's Waldo?' style. During prototyping, AI tools were used to generate code, visual and sound assets, further speeding up the process." 
])
add("project_capybara1", [
    "Lançamento previsto para o segundo trimestre de 2024.",
    "Scheduled for release in the second quarter of 2024."
])
add("project_capybara2", [
    "Desenvolvido no GameMaker com GML.",
    "Developed in GameMaker with GML. "
])

add("project_pokedex0", [
    "Protótipo de POKéDEX utilizando a API pokeapi.co.",
    "A POKéDEX prototype using the Pokémon API pokeapi.co." 
])

add("project_pokedex1", [
    "Feito em Unity 3D com C#.",
    "Made in Unity 3D with C#."
])

add("created_by", [
    "Criado Por Jefferson Jales",
    "Created By Jefferson Jales"
])
add("created_when",[
    "São Paulo - Brasil - 2024",
    "São Paulo - Brazil - 2024"
])

function changeLanguage(lang_value){
    langDataArr.forEach(function(item){
        console.log(item);
        const element = document.getElementById(item.id)
        console.log(element);
        
        if(element != null)
            element.innerHTML = item.arrKeys[lang_value];
    })
}

function setEnglishLanguage(){
    changeLanguage(LANGUAGES.ENGLISH);
}

function setPortugeseLanguage(){
    changeLanguage(LANGUAGES.PORTUGUESE);
}
