function main(){
    __add_project("https://store.steampowered.com/app/1829270/RoadOut/", "resources/roadout_img.jpg", "project_roadout", 4, "row1");
    __add_project('https://store.steampowered.com/app/2308260/Capybara_Hotel/', "resources/capybara_img.jpg", "project_capybara", 4, "row1");
    __add_project('https://jeffersonjales.itch.io/pokemon-api-unity', "resources/poke_api.png", "project_pokedex", 3, "row1");
    
    setEnglishLanguage();

    
    /*
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
    */
}

document.addEventListener("DOMContentLoaded", main);