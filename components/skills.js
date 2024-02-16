
function __skill_add(skillName, skillPerc, color){
    document.getElementById("skillbar").innerHTML += 
        '<div class="progress">' + 
            `<div class="progress-label progress-collum-text">${skillName}</div>` +
            '<div class="progress-collum-bar">' + 
                `<div class="progress-bars">` + 
                    '<div class="total-bar"></div>' +
                    `<div class="progress-bar" style="width: ${skillPerc}%; background-color: ${color}"></div>` +
                    '<p class="progress-numbers" style="left: 0.5%;">1</p>' + 
                    '<p class="progress-numbers" style="left: 99%;">5</p>' +
                '</div>' + 
            '</div>'+
        '</div>'
}

function add_skills(){
    let colorRed = "rgba(255, 0, 0, 0.5)"
    let colorGreen = "rgba(0,255, 0, 0.5)"
    let colorYellow = "rgba(255, 255, 0, 0.5)"

    __skill_add("C#", 80, colorRed);
    __skill_add("Unity 3D", 90, colorRed);
    __skill_add("GML", 100, colorRed);
    __skill_add("GameMaker", 100, colorRed);
    __skill_add("Netcode", 20, colorRed);

    __skill_add("HTML5", 70, colorRed);
    __skill_add("CSS3", 60, colorRed);
    __skill_add("JavaScript", 100, colorRed);

    __skill_add("SQL", 60, colorRed);
    __skill_add("API", 60, colorRed);
    __skill_add("Git", 90, colorRed);
}

document.addEventListener("DOMContentLoaded", add_skills);