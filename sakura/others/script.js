//連携鯖一覧をservers.jsonから読み込む
document.addEventListener('DOMContentLoaded', loadfinish);
function loadfinish(){
    // 1秒後にフラグを立てる
    setTimeout(() => {
        timeoutComplete = true;
        if (loadComplete) {
            loaded();
        }
    }, 1300);
    
    // ページロード完了時
    window.onload = () => {
        loadComplete = true;
        if (timeoutComplete) {
            loaded();
        }
    };
}
function loaded(){
    document.getElementById("loading").style.opacity = "0";
    document.getElementById("loading").style.display = "none";
}