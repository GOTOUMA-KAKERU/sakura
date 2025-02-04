document.addEventListener('DOMContentLoaded', loadfinish);
function loadfinish(){
    
}

function con_detail(element){
    var contact_background = document.getElementById('contact_server_background');
    var contact_name = document.getElementById("contact_server_name");
    var contact_about = document.getElementById("contact_server_about");
    var contact_link = document.getElementById("contact_server_link");

    contact_background.style.display = "grid";
    var jsonname = "./contact_servers/jsons/" + element.id + ".json";
    fetch(jsonname) // JSON を取得
    .then(response => response.json()) // JSON をオブジェクトに変換
    .then(data => {
        contact_about.innerHTML = "";
            console.log(data.name);
            contact_name.textContent = data.name;
            contact_about.insertAdjacentHTML("beforeend", marked.parse(data.content));
            console.log(marked.parse(data.content));
    })
    .catch(error => console.error("エラー:", error));

}

function back(){
    var contact_detail = document.getElementById('contact_server_background');
    contact_detail.style.display = "none";
}