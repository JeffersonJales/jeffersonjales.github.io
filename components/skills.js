
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

