function __add_project_mini(link, img_resource_path, paragrath_id, amount_p, row_id){

    var _str_html =  
        `<div onclick="newTab('${link}')" class="card-mini">` +
        `<img src=${img_resource_path}>`;
    
    for(let i = 0; i < amount_p; i++){
        _str_html += `<p id=${paragrath_id + String(i)}></p>` 
    }
    
    _str_html += '</div>'

    var element = document.getElementById(row_id);
    element.innerHTML += _str_html;
}
