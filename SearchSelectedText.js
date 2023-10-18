const searchEngine = "https://www.google.com/search?q=";
const toggle = document.querySelector(".toggle");
// import {keyBind, alternativeKey} from "./settings.js";
keyBind = "Q"
const alternativeKey = keyBind.toLowerCase();
let toggleValue = true;
document.addEventListener("keydown", function (event) {
    if ((event.key === keyBind || event.key === alternativeKey) && event.ctrlKey) {
        let search = window.getSelection().toString();
        if (search != "") {
            search.replace(" ", "+")
            window.open(searchEngine+search, '_blank');
        }
    }
})
function toggleFunction(){
toggle=!toggle;
if (toggle){
    document.querySelector(".toggle").classList.add("on");
    document.querySelector(".toggle").classList.remove("off");
}
else{
    document.querySelector(".toggle").classList.add("off");
    document.querySelector(".toggle").classList.remove("on");
}
}