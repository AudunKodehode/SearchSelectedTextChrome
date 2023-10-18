const searchEngine = "https://www.google.com/search?q=";
// import {keyBind, alternativeKey} from "./settings.js";
keyBind = "Q"
const alternativeKey = keyBind.toLowerCase();

document.addEventListener("keydown", function (event) {
    if ((event.key === keyBind || event.key === alternativeKey) && event.ctrlKey) {
        let search = window.getSelection().toString();
        if (search != "") {
            search.replace(" ", "+")
            window.open(searchEngine+search, '_blank');
        }
    }
})
