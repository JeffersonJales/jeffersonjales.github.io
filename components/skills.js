
function __skill_add(skillName, skillPerc){
    document.getElementById("skillbar").innerHTML += 
        '<div class="progress">' + 
            `<div class="progress-label progress-collum-text">${skillName}</div>` +
            '<div class="progress-collum-bar">' + 
                '<div class="progress-bars">' + 
                    '<div class="total-bar"></div>' +
                    `<div class="progress-bar" style="width: ${skillPerc}%;"></div>` +
                    '<p class="progress-numbers" style="left: 0%;">0</p>' + 
                    '<p class="progress-numbers" style="left: 100%;">10</p>' +
                '</div>' + 
            '</div>'+
        '</div>'
}

function add_skills(){
    __skill_add("HTML5", 80);
    __skill_add("CSS3", 60);
    __skill_add("JavaScript", 100);
    __skill_add("C#", 80);
    __skill_add("GML", 100);
    __skill_add("Java", 60);

    __skill_add("GameMaker", 100);
    __skill_add("Unity 3D", 90);
    __skill_add("Netcode", 20);

    __skill_add("SQL", 60);
    __skill_add("API", 60);
    __skill_add("Git", 90);
}

document.addEventListener("DOMContentLoaded", add_skills);