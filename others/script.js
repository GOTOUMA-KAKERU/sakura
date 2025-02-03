function con_detail(element){
    var contact_detail = document.getElementById('contact_server_background');
    contact_detail.style.display = "grid";
    var jsonname = "./contact_servers/jsons/" + element.id + ".json";
    fetch(jsonname) // JSON を取得
    .then(response => response.json()) // JSON をオブジェクトに変換
    .then(data => {
        data.forEach(item => {
            console.log(item.name);
            document.getElementById("aaa").innerHTML = marked.parse(item.content);
        });
    })
    .catch(error => console.error("エラー:", error));

}

function back(){
    console.log("clicked");
    var contact_detail = document.getElementById('contact_server_background');
    contact_detail.style.display = "none";
}