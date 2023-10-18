const searchEngine = "https://www.google.com/search?q=";
// import {keyBind, alternativeKey} from "./settings.js";
let keyBind = "Q";
const alternativeKey = keyBind.toLowerCase();
let toggleValue = true;
document.addEventListener("keydown", function (event) {
    if (toggleValue == true){
  if (
    (event.key === keyBind || event.key === alternativeKey) &&
    event.ctrlKey
  ) {
    let search = window.getSelection().toString();
    if (search != "") {
      search.replace(" ", "+");
      window.open(searchEngine + search, "_blank");
    }
  }
}
});

function toggleFunction() {
  toggle = !toggle;
  if (toggle) {
    document.getElementById("toggleDiv").className = "toggle on";
  } else {
    document.getElementById("toggleDiv").className = "toggle off";
  }
}
