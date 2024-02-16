
function __skill_add(skillName, skillPerc, color){
    document.getElementById("skillbar").innerHTML += 
        '<div class="progress">' + 
            `<div class="progress-label progress-collum-text">${skillName}</div>` +
            '<div class="progress-collum-bar">' + 
                `<div class="progress-bars">` + 
                    '<div class="total-bar"></div>' +
                    `<div class="progress-bar" style="width: ${skillPerc}%; background-color: ${color}"></div>` +
                    '<p class="progress-numbers" style="left: 0%;">0</p>' + 
                    '<p class="progress-numbers" style="left: 100%;">10</p>' +
                '</div>' + 
            '</div>'+
        '</div>'
}

function add_skills(){
    let colorGreen = "rgba(0,255, 0, 0.5)"
    let colorBlue = "rgba(255, 0, 0, 0.5)"
    let colorYellow = "rgba(255, 255, 0, 0.5)"

    __skill_add("HTML5", 80, colorGreen);
    __skill_add("CSS3", 70, colorGreen);
    __skill_add("JavaScript", 100, colorGreen);

    __skill_add("Java", 60, colorBlue);
    __skill_add("C# / .NET", 80, colorBlue);
    __skill_add("Unity 3D", 90, colorBlue);
    __skill_add("GML", 100, colorBlue);
    __skill_add("GameMaker", 100, colorBlue);
    __skill_add("Netcode", 20, colorBlue);

    __skill_add("SQL", 60, colorYellow);
    __skill_add("API", 60, colorYellow);
    __skill_add("Git", 90, colorYellow);
}

document.addEventListener("DOMContentLoaded", add_skills);