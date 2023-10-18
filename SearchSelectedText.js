const searchEngine = "https://www.google.com/search?q=";
let keyBind = "Q";
const alternativeKey = keyBind.toLowerCase();
const toggleButton = document.getElementById("toggleDiv");
const saveSettingsButton = document.getElementById("saveSettingsButton");
const keyInput = document.getElementById("keyInput");
let toggleValue = true;

if (document.cookie.length > 2){
if (document.cookie[0] == "0"){
    toggleValue = false;
} else {
    toggleValue = true;
}
keyBind = document.cookie[1];
keyInput.value = document.cookie[1];
}

document.addEventListener("keydown", function (event) {
  if (toggleValue == true) {
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
function setToggle() {
  if (toggleValue) {
    document.getElementById("toggleDiv").className = "toggle on";
  } else {
    document.getElementById("toggleDiv").className = "toggle off";
  }
}

function toggleFunction() {
  toggleValue = !toggleValue;
  if (toggleValue) {
    document.getElementById("toggleDiv").className = "toggle on";
    document.cookie[0] = "1"
  } else {
    document.getElementById("toggleDiv").className = "toggle off";
    document.cookie[0] = "0"
  }
}
document.addEventListener("DOMContentLoaded", function () {
  setToggle();
  toggleButton.addEventListener("click", toggleFunction);
  saveSettingsButton.addEventListener("click", saveSettings);
});
function saveSettings() {
  let textvalue = keyInput.value[0];
  textvalue = textvalue.toUpperCase();
  keyInput.value = textvalue;
  keyBind = textvalue;
  alternativeKey = keyBind.toLowerCase();
  document.cookie[1] = keyBind;
}
