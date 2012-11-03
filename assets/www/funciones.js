function init() {
document.addEventListener("deviceready", deviceReady, true);
delete init;
}

function deviceReady() {

$("#login").on("click",function(e) {
   
            $.mobile.changePage("mapa.html");
            return false;
    });

}